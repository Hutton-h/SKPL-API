import type { Plugin } from '@skpl/types';

import { createHomepageService } from './homepage';

export const services = {
  homepage: createHomepageService,
} satisfies Plugin.LoadedPlugin['services'];
