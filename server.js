// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var express = require("express");
var fs = require("fs");

var app = express();
var jsonData = {count: 12, message: 'hey'};


app.get("/", function(req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) {
            res.status(500);
            res.send("500 - Internal Error");
            console.error(err);
            return;
        }
        // TODO - send index.html
        res.send(data.toString());
    });
});

app.get("/data", function(req, res) {
    res.json(jsonData);
});

app.listen(3000);