"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManger = void 0;
class GameManger {
    constructor() {
        this.games = [];
    }
    static getInstance() {
        if (GameManger.instance) {
            return GameManger.instance;
        }
        GameManger.instance = new GameManger();
        return GameManger.instance;
    }
    addgame(id) {
        this.games.push({
            id: id,
            blackPlayerName: "Gaurav",
            whitePlayerName: "Dipak",
            moves: [],
        });
    }
}
exports.GameManger = GameManger;
