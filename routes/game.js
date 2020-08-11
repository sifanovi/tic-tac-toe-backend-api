"use strict"
const express = require("express");
const router = express.Router();
const {createGame,getCurrentGameState,nextTurn}= require("../controllers/gamesController");
const bodyParser = require("body-parser");
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

router.post("/", function (req, res) {
    createGame(req,res)
})
router.get("/:id", function (req, res) {
   getCurrentGameState(req,res);
});
router.put("/:id",function (req,res) {
    nextTurn(req,res);
})
module.exports = router
