import type { Core } from '@skpl/types';
import type { TypeRegistry } from './type-registry';

export type Context = {
  strapi: Core.Strapi;
  registry: TypeRegistry;
};
