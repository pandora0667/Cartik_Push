'use strict';

const dgram = require('dgram');
const server = dgram.createSocket('udp4');

exports.set = (udpPort) => {
    server.bind(udpPort);

    server.on('error', (err) => {
        console.log('UDP server Error : ', err.stack);
        server.close();
    });

    server.on('listening', () => {
        const address = server.address();
        console.log(`server listening ${address.address}:${address.port}`);
    });

    server.on('message', (msg, info) => {
        console.log(`server got: ${msg} from ${info.address}:${info.port}`);
    });
};
