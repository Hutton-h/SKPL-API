# vitest-config

Shared Vitest configuration for the SKPL monorepo.

> [!IMPORTANT]
> This is a private package and is not intended to be used outside of the SKPL monorepo.

## Usage

### Unit Tests

```typescript
import { defineConfig, mergeConfig } from 'vitest/config';
import { unitPreset } from 'vitest-config/presets/unit';

export default mergeConfig(
  unitPreset,
  defineConfig({
    test: {
      root: __dirname,
    },
  })
);
```
