import express from 'express';
import { json } from 'body-parser';
import { videosRouter } from './routes';
import mongoose from "mongoose";

const app = express();
const mongo_uri = 'mongodb://localhost:5432'
//Database connection. 
mongoose.connect(mongo_uri, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log("Succesfully connected"))
.catch((error) => console.log(error))

app.use(json())
app.use(videosRouter)
app.listen(3000, ()=>{
    console.log('server is listenting on port 3000')
})