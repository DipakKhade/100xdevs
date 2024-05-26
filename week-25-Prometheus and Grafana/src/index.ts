import express , {Express, NextFunction, Request, Response}from 'express'
import { requestCountMiddleware , cleanupMiddleware} from './monitoring/req_count';
import client from "prom-client";


const app : Express =express();


app.get('/user',requestCountMiddleware,function(req,res){
    return res.json({
        name:"Dipak"
    })
})


app.get('/metrics',async function(req:Request,res:Response){
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);

})


app.listen(3000)