import type { Core } from '@skpl/types';

import { ProviderInitializationError } from '../errors/providers';

export type ValidStrapiAssertion = (strapi: unknown, msg?: string) => asserts strapi is Core.Strapi;

export const assertValidStrapi: ValidStrapiAssertion = (strapi?: unknown, msg = '') => {
  if (!strapi) {
    throw new ProviderInitializationError(`${msg}. SKPL instance not found.`);
  }
};
