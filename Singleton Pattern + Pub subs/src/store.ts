interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

export class GameManger {
  games: Game[] = [];

  private static instance: GameManger;

  private constructor() {}

  static getInstance() {
    if (GameManger.instance) {
      return GameManger.instance;
    }
    GameManger.instance = new GameManger();

    return GameManger.instance;
  }

  addgame(id: string) {
    this.games.push({
      id: id,
      blackPlayerName: "Gaurav",
      whitePlayerName: "Dipak",
      moves: [],
    });
  }
}
