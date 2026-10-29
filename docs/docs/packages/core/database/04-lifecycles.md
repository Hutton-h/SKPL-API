---
title: Lifecycles
description: TypeScript types for content-type lifecycle hooks
tags:
  - typescript
---

Content-type lifecycle hooks (`src/api/<api>/content-types/<content-type>/lifecycles.ts`) receive a database lifecycle `Event` object.

For TypeScript projects, import the type from `@skpl/database`:

```ts
import type { Event } from '@skpl/database';

export default {
  async beforeCreate(event: Event) {
    const { data } = event.params;
    // ...
  },
};
```

The `Event` type includes `action`, `model`, `params`, `state`, and optional `result`. It is defined in `@skpl/database` alongside the lifecycle subscriber implementation.
