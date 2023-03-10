const express = require('express')
const app=express() 
const mongoose =require('mongoose')
const dotenv =require("dotenv")
const helmet =require("helmet")
const morgan=require("morgan")
dotenv.config()
mongoose.set('strictQuery', false);

const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')




//middleweres
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))

app.use('/api/',userRouter)

// app.use('/api/auth',authRouter)




mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("conncected to mongodb")
});

app.listen(8000,()=>{console.log("server is running..")})