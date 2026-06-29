import dotenv from 'dotenv'
dotenv.config()


import express from 'express'
import connectCloudinary from './config/cloudinary.js'
import {v2 as cloudinary} from 'cloudinary'
import connectDB from './config/database.js'
import cors from 'cors'
import allRouter from './routes/allroutes.js'

const app = express();

app.use(cors());
app.use("/api/product/", allRouter);
app.use(express.json())
connectDB();
connectCloudinary();


app.listen(8000, ()=>console.log("running"))