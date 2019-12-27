"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("legends", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      real_name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING
      },
      home_world: {
        type: Sequelize.STRING
      },
      back_story: {
        type: Sequelize.TEXT
      },
      prim_passive: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "passives"
          },
          key: "id"
        },
        allowNull: false,
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      sec_passive: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "passives"
          },
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      tactical: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "tacticals"
          },
          key: "id"
        },
        allowNull: false,
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      ultimate: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "ultimates"
          },
          key: "id"
        },
        allowNull: false,
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("legends");
  }
};
