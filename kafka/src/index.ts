import { Kafka, logLevel } from "kafkajs";
import { mainConsumer } from "./consumer";
import { mainProduer } from "./producer";

export const kafka=new Kafka({
    clientId:'my-app',
    brokers:['localhost:9092']
})


async function init(){
  
   
}


init().catch(console.error)
