import type { StrapiApp } from '@skpl/strapi/admin';

export default {
  config: {
    locales: ['fr'],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
