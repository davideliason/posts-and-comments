const express = require("express");
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('dotenv').config()

// connect to mLab mongo
var dbConnect = require('./db_config');
// import User Model
const User = require('./src/user');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {

});

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
