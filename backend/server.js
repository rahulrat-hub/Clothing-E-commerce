import express from 'express'
import connectDB from './config/database.js'

const app = express();

app.use(cors());
app.use("api/product/add", allRouter);
connectDB();


app.listen(8000, ()=>console.log("running"))