//var http = require('http');
var express = require('express');
var apiServer = express();

var hostname = 'localhost';
var port = 3000;
var path = require('path');

var name = "NodeJSEx1";

apiServer.listen(port, hostname, () => {
    console.log("Running at http://%s:%d/", hostname, port)
});

apiServer.get("/name", (req, res) => {
    console.log("Recieved \"name\" get request");
    res.send("Server name: "+ name);
});

apiServer.get("/", (req, res) => {
    res.send("Welcome!");
});

apiServer.get("/index", (req, res) => {
    console.log("Recieved \"index\" get request");
    res.sendFile(path.join(__dirname + "/index.html"));
});