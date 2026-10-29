import type { Core } from '@skpl/strapi';
import initSentryMiddleware from './middlewares/sentry';

export default async ({ strapi }: { strapi: Core.Strapi }) => {
  // Initialize the Sentry service exposed by this plugin
  initSentryMiddleware({ strapi });
};
