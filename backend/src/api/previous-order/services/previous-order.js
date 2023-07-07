'use strict';

/**
 * previous-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::previous-order.previous-order');
