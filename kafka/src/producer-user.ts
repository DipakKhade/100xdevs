import {kafka} from './index'


const producer=kafka.producer()

export async function mainProduer(){
    await producer.connect()
    producer.send({
        topic:'payment-done',
        
        messages:[
            { 
                value: 'Rs 78 is dabted from your account' ,
                key:'user1'
            },
            
           
        ]
    })

}


mainProduer().catch(e=>console.log(e))