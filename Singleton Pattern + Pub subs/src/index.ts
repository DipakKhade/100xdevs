// import { games } from "./store"
// import { startLogger } from "./logger"
// import { GameManger } from "./store"

import { PubSubManager } from "./redis+pubsub/PubSubManger";

// startLogger()
// setInterval(()=>{

//     GameManger.getInstance().addgame(Math.random().toString())

// },5000)


setInterval(()=>{
PubSubManager.getInstance().userUnSubscribe(Math.random().toString(),"APPLE")
},5000)