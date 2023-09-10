'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          product_id: 1,
          product_name: "Mangoes",
          price: 200,
          img_url: "mango.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 2,
          product_name: "Banana",
          price: 50,
          img_url: "banana.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 3,
          product_name: "Cabbage",
          price: 10,
          img_url: "cabbage.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 4,
          product_name: "Beans",
          price: 20,
          img_url: "beans.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 5,
          product_name: "Cauliflower",
          price: 40,
          img_url: "cauliflower.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 6,
          product_name: "Apple",
          price: 300,
          img_url: "apple.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 7,
          product_name: "Lipton Green Tea",
          price: 250,
          img_url: "green-tea.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 8,
          product_name: "Bru Instant Coffee",
          price: 150,
          img_url: "bru.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 9,
          product_name: "Nescafe Coffee",
          price: 190,
          img_url: "nescafe.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 10,
          product_name: "Red Label Tea",
          price: 300,
          img_url: "red-label.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 11,
          product_name: "Bisllery",
          price: 20,
          img_url: "water.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 12,
          product_name: "Dettol Soap",
          price: 25,
          img_url: "dettol.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 13,
          product_name: "Dove Soap",
          price: 40,
          img_url: "dove.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 14,
          product_name: "Pantene Hair Shampoo",
          price: 140,
          img_url: "pantene.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 15,
          product_name: "Sunsilk Shampoo",
          price: 160,
          img_url: "sunsilk.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
