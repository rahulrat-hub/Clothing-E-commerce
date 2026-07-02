import React from 'react';
import {Link} from 'react-router-dom';

function Card({image, name, price, id }) {
  return (
    <Link to={`/product/${id} `} className=''>
<img  className='border' src={image} alt="" />

<h2 className='py-2 '>{name}</h2>

<div className="flex justify-between ">
  <p className='border w-12 p-1'>${price}</p>

<button className='border text-sm p-1 cursor-pointer'>ADD TO CART</button>
</div>

</Link>
  )
}

export default Card