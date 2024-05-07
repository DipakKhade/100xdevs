"use strict";
// import { games } from "./store"
// import { startLogger } from "./logger"
// import { GameManger } from "./store"
Object.defineProperty(exports, "__esModule", { value: true });
const PubSubManger_1 = require("./redis+pubsub/PubSubManger");
// startLogger()
// setInterval(()=>{
//     GameManger.getInstance().addgame(Math.random().toString())
// },5000)
setInterval(() => {
    PubSubManger_1.PubSubManager.getInstance().userUnSubscribe(Math.random().toString(), "APPLE");
}, 5000);
