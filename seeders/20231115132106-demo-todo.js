"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Todos",
      [
        {
          tittle: "Mengisi Logbook",
          description: "Tanggal 15"
        },
        {
          tittle: "Live Session",
          description: "Hari Senin"
        },
        {
          tittle: "Mengerjakan Post Test",
          description: "Mysql Dasar"
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Todos", null, {});
  },
};