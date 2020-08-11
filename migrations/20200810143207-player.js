'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('players', {
            id: {
                type: Sequelize.UUID,
                autoIncrement: false,
                primaryKey: true,
            },
            symbol: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: new Date(),

            },
            gameId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'games',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: true
            }
        })
    },

    down: async (queryInterface, Sequelize) => {

        return queryInterface.dropTable('players')

    }
};
