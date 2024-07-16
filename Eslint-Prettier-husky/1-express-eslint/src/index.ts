import express from 'express';

const app=express();

const x=23;
app.get('/',function(req,res){
    return res.json({
               success:true
    })
})

app.listen(3000,function(){
    console.log('server is up')
})