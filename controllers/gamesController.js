"use strict"
const express = require("express");
const router = express.Router();
const {INITIAL_MOVE} = require("../constants/gameConstants")
const {playerOneSymbol, playerTwoSymbol} = require("../constants/playerConstants")
const {players, games, actionLogs, sequelize,} = require("../models/index");

const httpStatusCodes = require('http-status-codes')

const createGame = async (req, res) => {

    const gamePayload = {}
    const playerOnePayload = {}
    const playerTwoPayload = {}

    await sequelize.transaction(async function (t) {
        gamePayload.createdAt = new Date();
        gamePayload.turn = 'playerOne'
        gamePayload.history = JSON.stringify(INITIAL_MOVE)

        const game = await games.create(gamePayload, {transaction: t})

        playerOnePayload.gameId = game.id
        playerOnePayload.symbol = playerOneSymbol;
        playerTwoPayload.gameId = game.id
        playerTwoPayload.symbol = playerTwoSymbol;

        const playerOne = await players.create(playerOnePayload, {transaction: t});
        const playerTwo = await players.create(playerTwoPayload, {transaction: t});

        const result = {}

        result.player = {}
        result.id = game.id
        result.player.playerOne = playerOne.symbol;
        result.player.playerTwo = playerTwo.symbol;
        result.player.playerOneId = playerOne.id;
        result.player.playerTwoId = playerTwo.id;
        result.player.turn = game.turn
        result.moves = INITIAL_MOVE;
        result.result = {
            win: null,
            tie: false
        }


        res.status(httpStatusCodes.CREATED).json(result)

    }).catch(function (err) {
        res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).send(err)
    })

}

const getCurrentGameState = async (req, res) => {
    try {
        const prevState = {}
        const gameState = await games.findOne({
            attributes: ['history', 'turn'],
            where: {
                id: req.params.id

            }
        })
        const logs = await actionLogs.findAll({
            where: {
                gameId: req.params.id
            }
        })
        if (gameState) {
            prevState['moves'] = JSON.parse(gameState.history);
            prevState['turn'] = gameState.turn;
        }
        if (actionLogs) {
            prevState['logs'] = logs;
        }

        res.status(httpStatusCodes.OK).json(prevState)
    } catch (err) {
        res.status(httpStatusCodes.NOT_FOUND).send(err);
        //should replace with meaning full error message
    }


}

const nextTurn = async (req, res) => {
    try {
        if (req.body.history) {
            req.body.history = JSON.stringify(req.body.history)
        }
        const turn = await games.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.send(turn);
    } catch (err) {
        res.status(500).send(err);
        //should replace with meaning full error message
    }
}

module.exports = {createGame, getCurrentGameState, nextTurn}



