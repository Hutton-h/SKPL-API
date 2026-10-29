const { validateEntityGraph } = require('../check-impl');

type Strapi = import('@skpl/types').Core.Strapi;

module.exports = {
  id: 'entityGraph',
  title: 'Components/dynamic zones/media',
  async run({ strapi }: { strapi: Strapi }) {
    return validateEntityGraph(strapi);
  },
};
