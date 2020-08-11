'use strict';

module.exports = function (sequelize, DataTypes) {
    const games = sequelize.define("games",

        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                autoIncrement: false,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },

            result: {
                type: DataTypes.ENUM('win', 'tie', 'undecided'),
                defaultValue: 'undecided',
                allowNull: false
            },
            turn: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: new Date(),
                allowNull: false
            },
            history:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            updatedAT: {
                type: DataTypes.DATE
            }

        });
    games.associate = function (models) {

        games.belongsTo(models.players, {
            foreignKey: 'gameId'
        })
        games.belongsTo(models.actionLogs,{
            foreignKey:'game'
        })
    }
    return games;
}
