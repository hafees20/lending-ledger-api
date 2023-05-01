import dotenv from 'dotenv';
import express from 'express';
import router from './src/routes/routes.js';

dotenv.config()

const app=express();

const port=process.env.PORT || 3000;

//Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router)

app.listen(port,()=>{
    console.log("Server started on port :",port);
})