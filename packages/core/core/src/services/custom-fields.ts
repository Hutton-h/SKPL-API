import type { Core, Modules } from '@skpl/types';

const createCustomFields = (strapi: Core.Strapi): Modules.CustomFields.CustomFields => {
  return {
    register(customField) {
      strapi.get('custom-fields').add(customField);
    },
  };
};

export default createCustomFields;
