---
title: 'create-skpl-app'
sidebar_label: 'create-skpl-app'
description: 'CLI to scaffold a new SKPL project'
package: 'create-skpl-app'
status: draft
review_notes:
  - Written from the package source on develop; needs a maintainer review.
---

## Purpose

Provides the official CLI for SKPL app developers to create new SKPL projects. Available via `yarn create strapi-app` or `npx create-skpl-app`. Handles project initialization, prompts for configuration, and can integrate with SKPL Cloud.

## Key concepts

- **Entry point**: `run()` function processes CLI arguments and guides project creation. See [index.ts](https://github.com/strapi/strapi/tree/develop/packages/cli/create-skpl-app).
- **Interactive prompts**: Collects project name, database choice, and optional Cloud integration via `prompts.ts`.
- **Dual mode**: Supports local project creation and SKPL Cloud project creation with API integration.

## Related

- [Testing](../../../contributing/03-testing/index.md): CLI test infrastructure.
