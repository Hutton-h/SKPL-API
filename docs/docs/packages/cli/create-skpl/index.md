---
title: 'create-skpl'
sidebar_label: 'create-skpl'
description: 'Alias CLI for creating new SKPL projects via npm init'
package: 'create-skpl'
status: draft
review_notes:
  - Written from the package source on develop; needs a maintainer review.
---

## Purpose

Provides an alternative entry point for SKPL app developers to create new projects. Delegates to `create-skpl-app`. Available via `npm init strapi@latest`, `yarn create strapi@latest`, and `npx create-skpl@latest`.

## Key concepts

- **Wrapper package**: Delegates to create-skpl-app/bin at [index.js](https://github.com/strapi/strapi/tree/develop/packages/cli/create-skpl). Exists for npm init/pnpm create integration.
- **Same functionality**: Offers the same project scaffolding and prompts as create-skpl-app.

## Related

- [`create-skpl-app`](../create-skpl-app/index.md): primary package that provides the actual CLI.
