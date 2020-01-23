"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("weapons", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true
      },
      dps: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      rarity: {
        type: Sequelize.STRING
      },
      ammo_type: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "ammo_types"
          },
          key: "id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      imageURL: {
        type: Sequelize.TEXT
      },
      // stabalizer: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: {
      //       tableName: "stabalizers"
      //     },
      //     key: "id"
      //   },
      //   allowNull: false,
      //   onDelete: "cascade",
      //   onUpdate: "cascade"
      // },
      // extended_clip: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: {
      //       tableName: "extended_clips"
      //     },
      //     key: "id"
      //   },
      //   allowNull: false,
      //   onDelete: "cascade",
      //   onUpdate: "cascade"
      // },
      // stock: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: {
      //       tableName: "stocks"
      //     },
      //     key: "id"
      //   },
      //   allowNull: false,
      //   onDelete: "cascade",
      //   onUpdate: "cascade"
      // },
      // sight: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: {
      //       tableName: "sights"
      //     },
      //     key: "id"
      //   },
      //   allowNull: false,
      //   onDelete: "cascade",
      //   onUpdate: "cascade"
      // },
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
    return queryInterface.dropTable("weapons");
  }
};
