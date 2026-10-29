'use strict';

/**
 * config router
 */

const { createCoreRouter } = require('@skpl/strapi').factories;

module.exports = createCoreRouter('api::config.config');
