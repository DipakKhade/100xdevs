import{model,connect,Schema} from "mongoose";

export async function dbConnection(){
    await connect('mongodb://localhost:27017/comments')
    console.log('connected to db')
}


const CommentsSchema=new Schema({
    postId:Number,
    id:Number,
    name:String,
    email:String,
    body:String

})

export const Comments=model('Comments',CommentsSchema)




