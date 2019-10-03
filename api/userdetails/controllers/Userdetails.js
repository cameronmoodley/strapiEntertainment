'use strict';

/**
 * Userdetails.js controller
 *
 * @description: A set of functions called "actions" for managing `Userdetails`.
 */

module.exports = {

  /**
   * Retrieve userdetails records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.userdetails.search(ctx.query);
    } else {
      return strapi.services.userdetails.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a userdetails record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.userdetails.fetch(ctx.params);
  },

  /**
   * Count userdetails records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.userdetails.count(ctx.query);
  },

  /**
   * Create a/an userdetails record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.userdetails.add(ctx.request.body);
  },

  /**
   * Update a/an userdetails record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.userdetails.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an userdetails record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.userdetails.remove(ctx.params);
  }
};
