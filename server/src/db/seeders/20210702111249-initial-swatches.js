'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 120 swatches with hue from 0-360
    const now = new Date();
    const swatches = Array(120)
      .fill(0)
      .map((_, i) => i * 3)
      .map(v => ({hue: v, saturation: 100, value: 100, createdAt: now, updatedAt: now}));

    await queryInterface.bulkInsert('Swatches', swatches);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Swatches', null, {});
  }
};
