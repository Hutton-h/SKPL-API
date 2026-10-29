import type { Core } from '@skpl/types';

export default (strapi: Core.Strapi) => {
  strapi.get('validators').set('content-api', { input: [], query: [] });
};
