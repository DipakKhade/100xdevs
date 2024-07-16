import {kafka} from './index'


const producer=kafka.producer()

export async function mainProduer(){
    await producer.connect()
    producer.send({
        topic:'quickstart-events',
        messages:[
            { value: 'hey this is message on random consumer group id' },
        ]
    })

}


mainProduer().catch(e=>console.log(e))