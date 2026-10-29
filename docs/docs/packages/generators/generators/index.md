---
title: '@skpl/generators'
sidebar_label: 'generators'
description: 'Code generators for SKPL APIs and plugins'
package: '@skpl/generators'
status: draft
review_notes:
  - Written from the package source on develop; needs a maintainer review.
---

## Purpose

Provides interactive and programmatic code generation for SKPL projects. Generates boilerplate for APIs, controllers, services, models, plugins, policies, and components. SKPL app developers use it via the CLI.

## Key concepts

- **Plop-based**: Uses Plop templating engine for code generation. See [index.ts](https://github.com/strapi/strapi/tree/develop/packages/generators/generators).
- **CLI and API**: `runCLI()` starts the interactive generator; `generate()` runs generators programmatically without user interaction.
- **Generators**: api, controller, service, model, plugin, policy, and component templates. Customize with options and data.

## Related
