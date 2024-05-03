"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { games } from "./store"
const logger_1 = require("./logger");
const store_1 = require("./store");
(0, logger_1.startLogger)();
setInterval(() => {
    store_1.GameManger.getInstance().addgame(Math.random().toString());
}, 5000);
