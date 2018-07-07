const express = require("express");
const app = express();
const mongoose = require('mongoose');

require('dotenv').config()

// connect to mLab mongo
var dbConnect = require('./db_config');
// import User Model
const User = require('./src/user');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
