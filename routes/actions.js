"use strict"
const express = require("express");
const router = express.Router();
const {createLogs} = require("../controllers/actionsController");
const bodyParser = require("body-parser");
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

router.post("/", function (req, res) {

      createLogs(req,res);
})


module.exports = router
