import {v2 as cloudinary} from 'cloudinary'
import fs from "fs/promises"
import productModel from '../Models/productModel.js'
import OrderModel from '../Models/OrderModel.js'

export const addProduct = async (req,res)=>{
    
try{
    const {name, description, category, subcategory, price, sizes, bestseller} = req.body

const image1 = req.files?.image1?.[0]
const image2 = req.files?.image2?.[0]
const image3 = req.files?.image3?.[0]
const image4 = req.files?.image4?.[0]

const images = [image1, image2, image3, image4].filter(Boolean)

const imageUrl = await Promise.all(

    images.map(async (file)=>{
        const result = await cloudinary.uploader.upload(file.path, {
             resource_type : "image"
        })

        // {permanent delete}
        await fs.unlink(file.path)

       return result.secure_url
    })

)

const product = await productModel.create({
    name,
    description,
    price,
    category,
    subcategory,
    sizes : JSON.parse(sizes),
    bestseller,
    image : imageUrl,
})

res.json({
    success : true,
    msg : "product added successsfully",
    product,
})

} catch (error){
    res.status(500).json({
        success : false,
        msg : error.message,
    })
}
}


export const listProduct = async (req,res)=> {

   try{
     const seeProduct = await productModel.find() 
    res.json({
        success : true,
        msg : "product found",
        seeProduct,
    })
   
} catch (error){
    res.status(500).json({
        success : false,
        msg : error.message,
    })
}

}

export const Orderlist = async (req,res)=>{

    let {userId, items, amount, address, paymentmethod, } = req.body

    const order = await OrderModel.create({
        userId,
        items,
        amount,
        address,
        paymentmethod
    })

    res.json({
        success : true,
        msg : "Order Place",
        order
    })
}