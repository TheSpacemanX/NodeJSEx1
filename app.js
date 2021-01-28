var http = require('http');
var express = require('express');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer((req, res) => {
    console.log("req:",req);
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("Hello there");
});

server.listen(port, hostname, () => {
    console.log("Running at http://%s:%d/", hostname, port)
});