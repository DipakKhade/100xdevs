"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const ws_2 = __importDefault(require("ws"));
const app = (0, express_1.default)();
const httpServer = app.listen(8080);
const wss = new ws_1.WebSocketServer({ server: httpServer });
let count = 0;
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    count = count + 1;
    console.log(count);
    ws.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === ws_2.default.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });
    ws.send('Hello! Message From Server!!');
});
