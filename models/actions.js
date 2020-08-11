'use strict';

module.exports = function (sequelize, DataTypes) {
    const actionLogs = sequelize.define("actionLogs", {

        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: false,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false

        },
        gameId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        cellIndex: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        playedBy: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }

    });
     actionLogs.associate = function (models) {

        actionLogs.hasMany(models.players);
        actionLogs.hasMany(models.games);


    }


    return actionLogs;
}
