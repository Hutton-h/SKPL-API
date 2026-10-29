---
title: Usage
description: 'Guide to using OpenAPI specifications in SKPL.'
toc_max_heading_level: 4
---

This section explores the SKPL OpenAPI toolset.

---

## `generate`

Generate an OpenAPI JSON document based on the given SKPL application.

By default, it collects content API routes registered in the application, transforms them into OpenAPI path objects, and fills in other OpenAPI components.

### Signature

```typescript
function generate(strapi: Core.SKPL, options?: GenerationOptions): GeneratorOutput;
```

### Parameters

- `strapi` — the SKPL application to generate an OpenAPI specification for
- `options.type` — optional route set to document: `'content-api'` (default) or `'admin'`

### Return value

A generation output object containing:

- `document` — the generated OpenAPI specification as JSON
- `durationMs` — elapsed generation time in milliseconds

### Example

```typescript
import { generate } from '@skpl/openapi';

const { document, durationMs } = generate(strapi, { type: 'content-api' });
```

---

## CLI

An experimental CLI wrapper is available in `@skpl/strapi`:

```bash
strapi openapi generate [-o, --output <path>]
```

The command loads the current application, calls `generate()`, and writes the result to a JSON file (default: `specification.json` in the project root).

:::warning
The OpenAPI generation feature is experimental. Its behavior and output may change without following semver.
:::
