'use strict';

/**
 * config service
 */

const { createCoreService } = require('@skpl/strapi').factories;

module.exports = createCoreService('api::config.config');
