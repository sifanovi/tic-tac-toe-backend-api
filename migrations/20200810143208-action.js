'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('actionLogs', {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                autoIncrement: false,

            },
            cellIndex: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            gameId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'games',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            playedBy: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'players',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: new Date()
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: true
            }
        })
    },
    down: async (queryInterface, Sequelize) => {

        return queryInterface.dropTable('actionLogs')
    }
};
