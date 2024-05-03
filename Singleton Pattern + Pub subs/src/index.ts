// import { games } from "./store"
import { startLogger } from "./logger"
import { GameManger } from "./store"



startLogger()
setInterval(()=>{

    GameManger.getInstance().addgame(Math.random().toString())

},5000)
