import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import connect from './database/connection.js';
// const express = require('express')
// const cors = require('cors')
// const morgan = require('morgan')

const app = express();

// ** MiddleWare:
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by')


const port =  8080;


// ** Http Get Request:
app.get('/', (req, res) => {
    res.status(201).json("Home Get Request");
});

//Start Server only having valid conn
connect().then(()=>{
    try {
        app.listen(port,()=>{
            console.log(`Server connected---> To http://localhost:${port}`);
        })
    } catch (error) {
        console.log("Can Not Connect to the server")     
    }
}).catch(error =>{
    console.log("Invalid DB Connection..!");
})

// app.listen(port,()=>{
//     console.log(`Server connected---> To http://localhost:${port}`);
// })