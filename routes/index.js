const express = require("express");
const router = express.Router();

router.use('/games', require('./game'));
router.use('/actions', require('./actions'));

module.exports = router;
