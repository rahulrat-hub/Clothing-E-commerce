import express from 'express'
import {addProduct, listProduct, Orderlist} from '../controller/allcon.js'
import upload from '../middleware/multer.js'

const allRouter = express.Router()

allRouter.post("/add",
    upload.fields([
        {name : "image1", maxCount : 1},
        {name : "image2", maxCount : 1},
        {name : "image3", maxCount : 1},
        {name : "image4", maxCount : 1},
    ]),
    addProduct)
    
    allRouter.get("/list", listProduct);
    allRouter.post("/order", Orderlist)

export default allRouter
