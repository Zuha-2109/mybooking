import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"

import hotelsRoute from "./routes/hotels.js"

import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";

import cors from "cors";

// const express = require("express")
const app = express()
// const port = process.env.PORT || 8800;
dotenv.config()

// const cors = require('cors');
const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDb!!!");
      } catch (error) {
        throw error;
      }

};

mongoose.connection.on("disconnected", () =>{
    console.log("Disconnected from Mongo")
})

mongoose.connection.on("disconnected", () =>{
    console.log("MongoDB Connected!")
})

// app.get('/user',(req, res)=>{

//     res.send("Hello World")
// })

//Middlewares - Important because its able to reach our request and response before sending anything to user


app.use(cookieParser());
app.use(express.json());
app.use(cors()) ;// Use this after the variable declaration

app.use("https://stay-buddy.onrender.com/api/auth", authRoute);
app.use("https://stay-buddy.onrender.com/api/users", usersRoute);

app.use("https://stay-buddy.onrender.com/api/hotels", hotelsRoute);

app.use("https://stay-buddy.onrender.com/api/rooms", roomsRoute);
//this is next middleware



app.use((err, req, res, next)=>{ // specific middlewafre that we can use for error handling

    // res.send("Hello from middleware") //app breaks because no return statement is used in index.js

    // console.log("hii middleware")
    // next()
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })

})


app.listen(8800, ()=>{
    connect()
    console.log("Connected to Backend!!!");
});