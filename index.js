const express = require('express')
const app=express() 
const mongoose =require('mongoose')
const dotenv =require("dotenv")
const helmet =require("helmet")
const morgan=require("morgan")

dotenv.config()
mongoose.set('strictQuery', false);




//middleweres
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))





mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("conncected to mongodb")
});

app.listen(8000,()=>{console.log("server is running..")})