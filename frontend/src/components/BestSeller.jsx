import React, {useState, useEffect} from 'react'
import Title from './Title'
import {assets, products} from '../assets/frontend_assets/assets'
import Card from './Card'




function BestSeller() {

  const [bestseller, setBestSeller] = useState([]);

useEffect(() => {
  setBestSeller(products.filter((i)=> i.bestseller))
}, []);

 return (
    <section className=' min-h-screen mb-8 '>

<div className="">
    <Title 
    title1="BEST SELLER"
    p="A top-rated best seller trusted by customers nationwide."
    />
</div>

<div className="grid grid-cols-2 ">
<div className="left p-4 border-r object-center">
 <video  src={assets.middle} 
 className='w-full h-full object-cover rounded-lg'
 autoPlay 
 loop 
 muted
 ></video>
</div>
<div className="right flex flex-wrap justify-center gap-10">
{
  bestseller.slice(0,6).map((obj,index)=>
  <div key={index} className="w-60 h-84 p-4 ">

<Card
id={obj._id}
image={obj.image}
name={obj.name}
price={obj.price}
/>

 </div>
)
}
</div>
</div>
</section>
  )
}

export default BestSeller