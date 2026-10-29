---
title: '@skpl/cloud-cli'
sidebar_label: 'cloud'
description: 'CLI commands for SKPL Cloud interactions'
package: '@skpl/cloud-cli'
status: draft
review_notes:
  - Written from the package source on develop; needs a maintainer review.
---

## Purpose

Provides CLI commands for SKPL app developers to manage SKPL Cloud projects, deployments, and environments. Integrated into the main SKPL CLI.

## Key concepts

- **Cloud commands**: `deployProject`, `link`, `login`, `logout`, `createProject`, `listProjects`, `listEnvironments`, `linkEnvironment`. See [index.ts](https://github.com/strapi/strapi/tree/develop/packages/cli/cloud).
- **Command builder**: `buildStrapiCloudCommands()` adds cloud subcommands to the Commander command object at startup.
- **Config management**: Local config stores installation ID and authentication state. Services handle API calls to SKPL Cloud backend.

## Related

- [Testing](../../../contributing/03-testing/index.md): CLI test infrastructure.
