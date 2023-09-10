"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "product_categories",
      [
        {
          id: 1,
          category_id: 1,
          product_id: 1,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 2,
          category_id: 2,
          product_id: 1,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 3,
          category_id: 4,
          product_id: 1,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 4,
          category_id: 1,
          product_id: 2,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 5,
          category_id: 2,
          product_id: 2,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 6,
          category_id: 5,
          product_id: 2,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 7,
          category_id: 1,
          product_id: 3,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 8,
          category_id: 3,
          product_id: 3,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 9,
          category_id: 7,
          product_id: 3,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 10,
          category_id: 1,
          product_id: 4,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 11,
          category_id: 3,
          product_id: 4,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 12,
          category_id: 6,
          product_id: 4,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 13,
          category_id: 1,
          product_id: 5,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 14,
          category_id: 3,
          product_id: 5,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 15,
          category_id: 1,
          product_id: 6,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 16,
          category_id: 2,
          product_id: 6,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 17,
          category_id: 8,
          product_id: 7,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 18,
          category_id: 11,
          product_id: 7,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 19,
          category_id: 8,
          product_id: 8,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 20,
          category_id: 12,
          product_id: 8,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 21,
          category_id: 8,
          product_id: 9,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 22,
          category_id: 12,
          product_id: 9,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 23,
          category_id: 8,
          product_id: 10,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 24,
          category_id: 11,
          product_id: 10,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 25,
          category_id: 8,
          product_id: 11,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 26,
          category_id: 13,
          product_id: 11,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 27,
          category_id: 14,
          product_id: 12,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 28,
          category_id: 15,
          product_id: 12,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 29,
          category_id: 14,
          product_id: 13,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 30,
          category_id: 15,
          product_id: 13,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 31,
          category_id: 14,
          product_id: 14,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 32,
          category_id: 16,
          product_id: 14,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 33,
          category_id: 14,
          product_id: 15,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
        },
        {
          id: 34,
          category_id: 16,
          product_id: 15,
          createdAt: "2023-09-10 10:23:10",
          updatedAt: "2023-09-10 10:23:10",
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
