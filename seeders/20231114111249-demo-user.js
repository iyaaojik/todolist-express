"use strict";

const bcrypt = require("bcrypt");
const saltrounds = 10;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "fauzi123",
          password: bcrypt.hashSync("1234", saltrounds),
        },
        {
          username: "jalil123",
          password: bcrypt.hashSync("5678", saltrounds),
        },
        {
          username: "adam123",
          password: bcrypt.hashSync("9101", saltrounds),
        },
        {
          username: "alex123",
          password: bcrypt.hashSync("1213", saltrounds),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};