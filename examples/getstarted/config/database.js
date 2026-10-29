/** @import { Core } from '@skpl/strapi' */

/** @type {Core.Config.Database<'sqlite'>['connection']} */
const sqlite = {
  client: 'sqlite',
  connection: {
    filename: '.tmp/data.db',
  },
  useNullAsDefault: true,
};

/** @type {Core.Config.Database<'postgres'>['connection']} */
const postgres = {
  client: 'postgres',
  connection: {
    database: process.env.DATABASE_NAME || 'strapi',
    user: process.env.DATABASE_USERNAME || 'strapi',
    password: process.env.DATABASE_PASSWORD || 'strapi',
    port: parseInt(process.env.DATABASE_PORT || '5432', 10),
    host: process.env.DATABASE_HOST || 'localhost',
  },
};

/** @type {Core.Config.Database<'mysql'>['connection']} */
const mysql = {
  client: 'mysql',
  connection: {
    database: 'strapi',
    user: 'strapi',
    password: 'strapi',
    port: 3306,
    host: 'localhost',
  },
};

/** @type {Core.Config.Database<'mysql'>['connection']} */
const mariadb = {
  client: 'mysql',
  connection: {
    database: 'strapi',
    user: 'strapi',
    password: 'strapi',
    port: 3307,
    host: 'localhost',
  },
};

const db = {
  mysql,
  sqlite,
  postgres,
  mariadb,
};

module.exports = {
  connection: process.env.DB ? db[process.env.DB] || db.sqlite : db.sqlite,
};
