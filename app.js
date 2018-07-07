const express = require("express");
const app = express();

require('dotenv').config()

var dbConnect = require('./db_config');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
