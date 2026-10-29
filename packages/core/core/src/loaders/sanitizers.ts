import type { Core } from '@skpl/types';

export default (strapi: Core.Strapi) => {
  strapi.get('sanitizers').set('content-api', { input: [], output: [], query: [] });
};
