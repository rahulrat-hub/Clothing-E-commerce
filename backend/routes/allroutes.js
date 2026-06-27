import express from 'express'
import {addProduct} from '../controller/allcon.js'

const allRouter = express.Router()

allRouter.post("/add" , addProduct)
