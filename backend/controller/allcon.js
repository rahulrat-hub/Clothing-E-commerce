export const addProduct = async (req,res)=>{
    
try{
    const {name, description, category, subcategory, price, sizes, bestseller} = req.body

const image1 = req.files?.image1?.[0]
const image2 = req.files?.image2?.[0]
const image3 = req.files?.image3?.[0]
const image4 = req.files?.image4?.[0]

cosnt images = [image1, image2, image3, image4].filter(Boolean)

const imageUrl = await Promise.all(

    images.map(async (file)=>{
        const result = await cloudinary.uploader.upload(file.path, {
             resource_type : "image"
        })
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