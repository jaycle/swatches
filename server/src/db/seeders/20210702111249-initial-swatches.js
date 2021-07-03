'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 120 swatches with hue from 0-360
    const now = new Date();
    const swatches = Array(120)
      .fill(0)
      .map((_, i) => i * 3)
      .map(v => ({hue: v, saturation: 100, value: 100, createdAt: now, updatedAt: now}));

    // 30 grays
    const grays = Array(30)
      .fill(0)
      .map((_, i) => i * 12)
      .map(v => ({hue: v, saturation: Math.floor(Math.random() * 10), value: 60, createdAt: now, updatedAt: now}))

    // 10 browns
    const browns = Array(10)
      .fill(0)
      .map((_, i) => 20 + i * 2)
      .map(v => ({hue: v, saturation: Math.floor(Math.random() * 10 + 90), value: Math.floor(Math.random() * 30 + 30), createdAt: now, updatedAt: now}))

    await queryInterface.bulkInsert('Swatches', [...swatches, ...grays, ...browns]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Swatches', null, {});
  }
};
