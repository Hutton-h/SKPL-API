'use strict';

/**
 * testing service
 */

const { createCoreService } = require('@skpl/strapi').factories;

module.exports = createCoreService('api::testing.testing');
