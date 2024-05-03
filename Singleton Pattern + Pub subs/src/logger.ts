import { GameManger } from "./store";


export function startLogger() {
  setInterval(() => {
    console.log(GameManger.getInstance().games);
  }, 5000);
}
