import express from 'express'
import  dotenv from 'dotenv'
import  posts from './routes/posts.js'
import { connectDatabase } from './config/connectDataBase.js'
 


dotenv.config()
connectDatabase()


const app=express()
app.use(express.json())

app.use('/api',posts)




app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})


