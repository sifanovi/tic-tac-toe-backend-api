'use strict';

module.exports = function (sequelize, DataTypes) {
    const players = sequelize.define("players",

        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                autoIncrement: false,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },
            symbol: {
                type: DataTypes.STRING,
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: new Date(),
            },
            gameId: {
                type: DataTypes.UUID,
                allowNull: false
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: true
            },
        });

    players.associate = function (models) {

        players.hasMany(models.games);
    }

    return players;
}
