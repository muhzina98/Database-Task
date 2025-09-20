import  { model, Schema } from "mongoose";


const postSchema= Schema({
     
    title: String,
    content: String


},{timestamp:true})

export const Post=model('post',postSchema)