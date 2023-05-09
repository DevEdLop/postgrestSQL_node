'use strict';


const { ORDER_PRODUCT_TABLE, OrderProductsSchema } = require('../models/order-product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductsSchema)
  },

  async down(queryInterface) {
    queryInterface.dropTable(ORDER_PRODUCT_TABLE)
  }
};
