"use strict";
//@todo: Return application json as an response
Object.defineProperty(exports, "__esModule", { value: true });
// services/residents.ts
var express = require("express");
var residents = require("./residents.mock");
var cors = require('cors');
var corsOptions = {
    origin: '*'
};
// Create a new express application instance
var app = express();
var port = 3000;
app.get('/', cors(corsOptions), function (req, res) {
    // let resi = residents;
    res.type('application/json');
    res.send(residents);
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});
