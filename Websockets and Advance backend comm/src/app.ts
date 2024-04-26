import express from 'express';
import { WebSocketServer } from 'ws'
import WebSocket from 'ws';
const app = express()
const httpServer = app.listen(8080)

const wss = new WebSocketServer({ server: httpServer });
let count=0;
wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
count=count+1;
console.log(count)
  
  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.send('Hello! Message From Server!!');
});


