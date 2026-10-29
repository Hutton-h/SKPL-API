'use strict';

/**
 * unique router
 */

const { createCoreRouter } = require('@skpl/strapi').factories;

module.exports = createCoreRouter('api::unique.unique');
