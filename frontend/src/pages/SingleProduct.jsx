import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {products} from '../assets/frontend_assets/assets'

function SingleProduct() {

  const {pid} = useParams()
  const [productDetail, setProductDetail] = useState(null);
  const [imageselect, setImageSelect] = useState();
  const [sizeselect, setSizeSelect] = useState("");
  
  const fetchData = () =>{
  let a = products.find((obj)=>obj._id.toString() === pid)
  if(a){
  setProductDetail(a);
  setImageSelect(a.image[0])
  }
  }

  useEffect(()=>{
fetchData()
  },[pid])
  
  if(!productDetail){
    return (
        <div className="min-h-screen flex items-center justify-center text-white text-3xl">
        404 - Product Not Found
      </div>
    )
  }

  return(
    <div className="flex gap-4">

    <div className="left flex m-4 gap-5">

{/* {Thumbnail} */}
    <div className=" cursor-pointer ">
      {
        productDetail?.image?.map((img,ind)=>(
          <img onClick={()=>setImageSelect(img)}
          key={ind}
          src={img} 
          alt="" 
          className={`w-20 h-25 cursor-pointer border ${imageselect === img} ? border-blue-500 : "`} />
        ))
      }
      </div> 
{/* {Main Image} */}
<div className="">
  <img src={imageselect} alt="" />
</div>
</div>


{/* {Content} */}

<div className="my-4">
  <h1 className="font-bold tracking-wide text-[21px]">{productDetail.name}</h1>
<p className="text-blue-500">${productDetail.price}</p>
<p className="py-4 ">{productDetail.description}</p>

<div className="">
<p className="font-medium">Select Size</p>
<div className="flex gap-4 mt-4">
  {
  productDetail.sizes.map((obj,ind)=>(
    <button 
    key={ind}
    onClick={()=>setSizeSelect(obj)}
    className={`px-4 py-2 border  ${sizeselect === obj ? "bg-black text-white" : ""}`}>
      {obj}
    </button>
  ))
}
</div>
</div>

{/* {button} */}

<button className="border bg-black text-white px-4 py-2 mt-4 hover:bg-zinc-800">ADD TO CART</button>


</div>









    </div>
  )
}

export default SingleProduct