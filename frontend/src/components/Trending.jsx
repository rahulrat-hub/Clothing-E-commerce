import react from "react";
import Title from './Title'
import {products} from '../assets/frontend_assets/assets'
import Card from './Card'
import Marquee from '../components/Marquee'


function BestSeller() {
  return (
    <div className=' min-h-120'>

<Title 
title1="TRENDING"
p="Level Up Your Everyday Essentials."
/>

<div className="max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6 my-7 mx-12 border-t ">
  {
  products.slice(0,4).map((obj ,index)=> 
  
  <div key={index} className="p-8">

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
<Marquee 
title='NEW ARRIVAL'
/>
</div>
  )
}

export default BestSeller