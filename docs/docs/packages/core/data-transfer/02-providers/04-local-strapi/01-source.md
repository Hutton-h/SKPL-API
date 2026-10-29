---
title: Source
description: 'Guide to using local SKPL instance as a data source.'
tags:
  - providers
status: needs-review
review_notes:
  - Mentions the Entity Service; the providers use `strapi.db.query`.
---

# Local SKPL Source Provider

This provider will retrieve data from an initialized `strapi` instance using its Entity Service and Query Engine.

## Provider Options

The accepted options are defined in `ILocalFileSourceProviderOptions`.

```typescript
  getStrapi(): SKPL.SKPL | Promise<SKPL.SKPL>; // return an initialized instance of SKPL

  autoDestroy?: boolean; // shut down the instance returned by getStrapi() at the end of the transfer
```
