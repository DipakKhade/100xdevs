import {kafka} from './index';

export async function mainConsumer(){
    const consumer=kafka.consumer({
        groupId:'test-group'+Math.random().toString()
    })
    await consumer.connect()
    consumer.subscribe({ topic: 'quickstart-events', fromBeginning: true })

    await consumer.run({
        eachMessage:async ({ topic, partition, message }) => {
            console.log({
              partition,
              offset: message.offset,
              value: message.value.toString(),
            })
          },
    })

}

mainConsumer().catch(e=>console.log(e))
