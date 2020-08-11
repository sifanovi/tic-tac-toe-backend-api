const express = require("express");
const router = new express.Router();
const cors = require("cors");
const routes = require("./routes");
const logger = require('morgan');
const app = express();

app.use(cors());
app.use(logger('dev'))
app.use("/", routes);

app.listen(3002)

module.exports = app;
