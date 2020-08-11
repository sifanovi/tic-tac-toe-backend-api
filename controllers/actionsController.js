"use strict"
const express = require("express");
const router = express.Router();
const {actionLogs,sequelize} = require("../models/index");
const httpStatusCode =require('http-status-codes');


const createLogs = async (req, res) => {

    try {
        await sequelize.transaction(async function (t) {
            const actionLog = await actionLogs.create(req.body, {transaction: t})
            if (actionLog.id) {
                res.status(httpStatusCode.CREATED).send(actionLog);
            }
        })
    } catch (err) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
        // should be changed with menaing ful error messages
    }
}


module.exports = {createLogs}



