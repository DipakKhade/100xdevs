import express, { NextFunction } from 'express';
import { Express, Request,Response } from 'express';
import { dbConnection,Comments } from './lib/mongo';
import z from 'zod'
import { connectToPgDb } from './lib/pgdb';
const app:Express=express();

const PORT :any = process.env.PORT;
app.use(express.json())

function add(a:number,b:number){
   const c=a+b
    return c

}

function multiple(a:number,b:number){
    const c=a*b
    return c
}

// jsonrpc
app.get('/rpc',function(req:Request,res:Response){
    const {jsonrpc,method,params,id}=req.body

    if(jsonrpc!=='2.0'){
        res.status(400).json({
            mesasge:'not a valid jsonrpc version'
        })
    }

    switch(method){
        case "add":
            const result1=add(params[0],params[1])
           return res.status(200).json({
                "result":result1
            })
        case "multiple":
            const result=multiple(params[0],params[1])
          return  res.status(200).json({
                "result":result
            })

        default:
            return res.status(400).json({
                "messsage":"not a valid method"
            })
    }
    

})


app.get('/db',async function(req:Request,res:Response){
    const {postId,id,name,email,body}=req.body

    try{
      await  dbConnection()
      await Comments.create({
        postId,id,name,email,body
      })

      return res.json({
        success:true
      })
    }

    catch(e){
        console.log('error occured')
        return null
    }


})

function middle(req:Request,res:Response,next:NextFunction){
    console.log('control is at middleware')
    next()

}

app.get('/get',middle,async function(req:Request,res:Response){
    const {email} = req.body

    try{
        await  dbConnection()
       const user= await Comments.findOne({
            email
        })
        if(!user){
            return res.json({message:"no user with this email"})
        }
        return res.json({
            user
        })

       
    }

    catch(e){
        console.log('error occured')
    }
})


app.post('/login',async function(req:Request,res:Response){
    const credentionals=await req.body
    console.log(req.body)
    const loginSchema=z.object({
        email:z.string(),
        password:z.string().min(8)
    })

    const isValid=loginSchema.safeParse(credentionals)
    console.log(isValid)

    return res.json({success:true})

})





// POSTgres


app.post('/pg',async function(req:Request,res:Response){
  await  connectToPgDb()
    
    return res.json({
        success:true
    })
})



app.use(function(err:Error,req:Request,res:Response,next:NextFunction){
    res.send('error occured at global catch')
})



app.listen(PORT,()=>console.log(`server is up at ${PORT}`))

