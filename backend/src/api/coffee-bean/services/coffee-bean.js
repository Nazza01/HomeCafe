'use strict';

/**
 * coffee-bean service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::coffee-bean.coffee-bean');
