'use strict';

/**
 * product service
 */

const { createCoreService } = require('@skpl/strapi').factories;

module.exports = createCoreService('api::product.product');
