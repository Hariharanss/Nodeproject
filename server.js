var express = require('express');
var app = express();
var routesrequire = require('./apifile');
app.use('/api',routesrequire);
const http = require('http');
const port = process.env.PORT || '3700';
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));