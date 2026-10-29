'use strict';

/**
 * global router.
 */

const { createCoreRouter } = require('@skpl/strapi').factories;

module.exports = createCoreRouter('api::global.global');
