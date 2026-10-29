---
title: '@skpl/strapi'
sidebar_label: 'strapi'
description: 'Framework entry package: the strapi CLI, the admin build tooling, and re-exports of @skpl/core and @skpl/types.'
package: '@skpl/strapi'
status: draft
review_notes:
  - Written from the package source on develop; needs a maintainer review.
---

## Purpose

`@skpl/strapi` is the package that a SKPL application installs. It gives the application the `strapi` command, the build tooling for the admin panel, and the public exports of the framework.

It runs in Node.js for the CLI and the build. The `@skpl/strapi/admin` export runs in the browser. `@skpl/core` holds the `Strapi` class. This package does not: it re-exports `@skpl/core` and the types of `@skpl/types`, and it depends on the core packages and plugins that make up a default installation.

## Key concepts

### Entry exports

The `exports` field of `package.json` has four entries.

- `.` (`src/index.ts`) re-exports everything from `@skpl/core` and the types from `@skpl/types`.
- `./admin` (`src/admin.ts`) exports `renderAdmin`, which mounts the admin application with the built-in admin plugins and the plugins of the application. It also exports hooks and helpers of `@skpl/admin` and `@skpl/content-manager`.
- `./admin/test` re-exports the test helpers of `@skpl/admin`.
- `./admin/styles.css` is the base stylesheet of the admin panel.

### The `strapi` binary

`bin/skpl.js` calls `runCLI` from `src/cli`. The CLI uses `commander`. Each command is a `StrapiCommand` factory: it receives `{ command, argv, ctx }` and returns a `Command`. The list is in `src/cli/commands/index.ts`. The context `ctx` holds `cwd`, a `logger` and a lazy `tsconfig`. The `logger` honors the `--debug` and `--silent` flags. See [CLI commands](./commands/00-overview.md).

### Commands from other packages

Some commands delegate their work. `export`, `import` and `transfer` use `@skpl/data-transfer`. `generate` starts `@skpl/generators`. `ts:generate-types` uses `@skpl/typescript-utils`. The cloud commands come from `@skpl/cloud-cli`. `openapi generate` calls `@skpl/openapi`.

### Admin build tooling

`src/node` builds the admin panel of an application. `createBuildContext` reads the application and lists the plugins for the bundle. A module plugin is a dependency whose `package.json` has `strapi.kind: 'plugin'`. A local plugin is declared in `config/plugins` with `enabled` and `resolve`. `writeStaticClientFiles` then writes a generated entry module that imports `renderAdmin` from `@skpl/strapi/admin`. The bundle is built with Vite by default. Webpack is still available with `--bundler webpack` and logs a deprecation warning. See [build](./commands/01-build.md).

### Development mode

`skpl develop` uses the Node `cluster` module. The primary process compiles TypeScript and forks a worker. The worker creates the SKPL instance with `autoReload` on, starts the admin watcher and watches the project files. A file change sends `reload` to the primary process, which recompiles and restarts the worker. See [develop](./commands/02-develop.md).

## Related

- [Architecture overview](../../../architecture/index.md): the server and admin split, and the `strapi-server` and `strapi-admin` entry points.
- [Package map](../../../architecture/01-package-map.mdx): where this package sits between the application and the core packages.
- [Server lifecycle](../../../architecture/02-server-lifecycle.md): the `start`, `console` and `develop` commands create and load the instance.
- [`@skpl/core`](../core/index.md): defines the `Strapi` class that this package re-exports.
- [`@skpl/types`](../types/index.md): the types that this package re-exports.
- [`@skpl/admin`](../admin/index.md): the React application that `renderAdmin` mounts.
- [`@skpl/data-transfer`](../data-transfer/index.md): provides the export, import and transfer engine.
- [`@skpl/openapi`](../openapi/index.md): generates the document for `strapi openapi generate`.
- [`@skpl/cloud-cli`](../../cli/cloud/index.md): provides the cloud commands.
