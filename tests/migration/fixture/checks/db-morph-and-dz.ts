const { verifyMigrationFixAtDbLevel } = require('../check-impl');

type Strapi = import('@skpl/types').Core.Strapi;

module.exports = {
  id: 'dbMorphAndDz',
  title: 'DB-level verification',
  async run({ strapi }: { strapi: Strapi }) {
    return verifyMigrationFixAtDbLevel(strapi);
  },
};
