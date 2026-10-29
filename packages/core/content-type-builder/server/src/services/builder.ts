import { contentTypes } from '@skpl/utils';

/**
 * Reserved names are centralised in `@skpl/utils` so the bootstrap validator,
 * the schema-to-model transform and this CTB service all share a single source.
 *
 * The arrays exported here are kept for backwards compatibility with consumers
 * that import them directly. New call sites should import from `@skpl/utils`.
 */
export const reservedAttributes = contentTypes.getReservedAttributeNames();
export const reservedModels = contentTypes.getReservedModelNames();

export const getReservedNames = () => {
  return {
    models: reservedModels,
    attributes: reservedAttributes,
  };
};

export const isReservedModelName = (name: string): boolean =>
  contentTypes.isReservedModelName(name);

export const isReservedAttributeName = (name: string): boolean =>
  contentTypes.isReservedAttributeName(name);
