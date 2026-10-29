import { Transform, JSCodeshift, Collection } from 'jscodeshift';

/*
This codemod transforms @skpl/strapi imports to use the new public interface.

ESM
Before:

import strapi from '@skpl/strapi';
strapi();

After:

import { createStrapi } from '@skpl/strapi'; // keeps the default import
createStrapi();

---

Common JS
Before:

const strapi = require('@skpl/strapi');
strapi();

After:

const strapi = require('@skpl/strapi');
strapi.createStrapi();

*/

const transformStrapiImport = (root: Collection, j: JSCodeshift) => {
  root.find(j.ImportDefaultSpecifier).forEach((path) => {
    if (path.parent.value.source.value === '@skpl/strapi') {
      const newSpecifiers = path.parent.value.specifiers.filter(
        (specifier) => specifier.type !== 'ImportDefaultSpecifier'
      );

      j(path.parent).replaceWith(
        j.importDeclaration(
          [...newSpecifiers, j.importSpecifier(j.identifier('createStrapi'))],
          j.literal('@skpl/strapi')
        )
      );

      transformFunctionCalls(path.value.local.name, root, j);
    }
  });
};

const transformRequireImport = (root: Collection, j: JSCodeshift) => {
  root
    .find(j.VariableDeclarator, {
      init: {
        callee: {
          name: 'require',
        },
        arguments: [{ value: '@skpl/strapi' }],
      },
    })
    .forEach((path) => {
      if (path.value.id.type === 'Identifier') {
        const identifier = path.value.id.name;

        root
          .find(j.CallExpression, {
            callee: {
              type: 'Identifier',
              name: identifier,
            },
          })
          .forEach((callExpressionPath) => {
            j(callExpressionPath).replaceWith(
              j.callExpression(
                j.memberExpression(j.identifier(identifier), j.identifier('createStrapi')),
                callExpressionPath.value.arguments
              )
            );
          });
      }
    });
};

const transformFunctionCalls = (identifier: string, root: Collection, j: JSCodeshift) => {
  root
    .find(j.CallExpression, {
      callee: {
        type: 'Identifier',
        name: identifier,
      },
    })
    .forEach((path) => {
      // we a type guard again to avoid ts issues
      if (path.value.callee.type === 'Identifier') {
        path.value.callee.name = 'createStrapi';
      }
    });
};

/**
 * Transformations
 *
 * With ESM imports
 *
 * import strapi from '@skpl/strapi'; => import strapi, { createStrapi } from '@skpl/strapi';
 * strapi() => createStrapi()
 *
 * With CJS imports
 *
 * const strapi = require('@skpl/strapi'); => no transform
 * strapi() => strapi.createStrapi()
 */
const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  const root = j(file.source);

  transformStrapiImport(root, j);
  transformRequireImport(root, j);

  return root.toSource();
};

export const parser = 'tsx';

export default transform;
