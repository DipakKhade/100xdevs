//@ts-ignore
import pg from 'pg'


const { Client } = pg

export async function connectToPgDb(){

    const client = new Client({
        user: 'postgres',
        password: 'dipak@8999',
        host: 'localhost',
        port: 5334,
        database: 'mydb',
    })
    await client.connect()
     
    console.log('coneected to Postgres')
    return null;
}
