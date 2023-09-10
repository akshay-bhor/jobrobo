"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          category_id: 1,
          category_name: "Fruits & Vegetables",
          parent_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          category_name: "Fresh Fruits",
          parent_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          category_name: "Fresh Vegetables",
          parent_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 4,
          category_name: "Mangoes",
          parent_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 5,
          category_name: "Banana",
          parent_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 6,
          category_name: "Beans",
          parent_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 7,
          category_name: "Cabbage",
          parent_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 8,
          category_name: "Beverages",
          parent_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 11,
          category_name: "Tea",
          parent_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 12,
          category_name: "Coffee",
          parent_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 13,
          category_name: "Water",
          parent_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 14,
          category_name: "Beauty & Hygiene",
          parent_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 15,
          category_name: "Soaps",
          parent_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 16,
          category_name: "Shampoo",
          parent_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
