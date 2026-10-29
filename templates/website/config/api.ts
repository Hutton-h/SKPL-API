import type { Core } from '@skpl/strapi';

const config: Core.Config.Api = {
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
};

export default config;
