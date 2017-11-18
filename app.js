'use strict';

const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const path = require('path');
const index = require('./routers/index');
const push = require('./services/push');
const udp = require('./services/udp');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const udpPort = 5001;

udp.set(udpPort);
index.web(app);

const options = {
    // key: fs.readFileSync('./privkey1.pem', 'utf8'),
    // cert: fs.readFileSync('./cert1.pem', 'utf8')
};

https.createServer(options, app).listen(3000);
console.log('Server running at https and 3000 port');
