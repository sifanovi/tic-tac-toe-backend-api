'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.createTable('games', {
                id: {
                    type: Sequelize.UUID,
                    primaryKey: true,
                    autoIncrement: false,
                },
                result:
                    {
                        type: Sequelize.ENUM('win', 'tie', 'undecided'),
                        defaultValue: 'undecided',
                        allowNull: false
                    },
                turn: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    defaultValue: 'playerOne'
                },
                createdAt: {
                    type: Sequelize.DATE,
                    defaultValue: new Date(),
                    allowNull: false
                },
                history: {
                    type: Sequelize.STRING,
                    allowNull: false

                },
                updatedAT: {
                    type: Sequelize.DATE,
                    allowNull: true
                }

            }
        );
    },

    down: async (queryInterface, Sequelize) => {

        return await queryInterface.dropTable('games');

    }
}
;
