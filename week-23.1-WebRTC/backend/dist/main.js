"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({
    port: 8080
});
let senderSocket = null;
let receiverSocket = null;
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    ws.on('message', function message(data) {
        const message = JSON.parse(data);
        // if(message.type==="sender"){
        //     senderSocket=ws;
        // }else if(message.type==="receiver"){
        //     receiverSocket=ws;
        // }else if(message.type==="createOffer"){
        // }
    });
    setInterval(() => {
        ws.send('message from socket');
    }, 1000);
});
