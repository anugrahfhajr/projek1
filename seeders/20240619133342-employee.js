"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Employees", [
      {
        name: "Thomas Hardy",
        email: "thomashardy@mail.com",
        jobPosition: "Backend",
        jobLevel: "Senior",
        birthDate: new Date(),
        salary: 20000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dominique Perrier",
        email: "dominiqueperrier@mail.com",
        jobPosition: "Backend",
        jobLevel: "Junior",
        birthDate: new Date(),
        salary: 11000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Maria Anders",
        email: "mariaanders@mail.com",
        jobPosition: "Product Manager",
        jobLevel: "Senior",
        birthDate: new Date(),
        salary: 25000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fran Wilson",
        email: "franwilson@mail.com",
        jobPosition: "Frontend",
        jobLevel: "Junior",
        birthDate: new Date(),
        salary: 11000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Martin Blank",
        email: "martinblank@mail.com",
        jobPosition: "Quality Assurance",
        jobLevel: "Senior",
        birthDate: new Date(),
        salary: 17000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
