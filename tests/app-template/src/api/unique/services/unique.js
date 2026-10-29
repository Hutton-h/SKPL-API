'use strict';

/**
 * unique service
 */

const { createCoreService } = require('@skpl/strapi').factories;

module.exports = createCoreService('api::unique.unique');
