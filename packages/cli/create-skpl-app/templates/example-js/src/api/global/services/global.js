'use strict';

/**
 * global service.
 */

const { createCoreService } = require('@skpl/strapi').factories;

module.exports = createCoreService('api::global.global');
