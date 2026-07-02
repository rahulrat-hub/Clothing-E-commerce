import React, {useState, useEffect} from "react";
import {RiSearchLine} from '@remixicon/react'
import {products} from '../assets/frontend_assets/assets'
import Card from '../components/Card'

function Collection() {
  const [data, setData] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");


  const categoryHandling = (event) =>{
let c = event.target.value
setCategory((i)=>i.includes(c) ? i.filter((o)=> o !== c) : [...i, c])
  }

  const subCategoryHandling = (event) => {
    let c = event.target.value
    setSubCategory((i)=>i.includes(c) ? i.filter((o)=> o !==c) :[...i, c])
  }

  const searchQuery = (event) => {
    setSearch(event.target.value)
  }

  const SortHandling = (event) => {
    setSorting(event.target.value)
  }


 useEffect(()=>{

  let copyProducts = [...products];

  if(category.length > 0) {
 copyProducts = copyProducts.filter((i)=>category.includes(i.category))
  }

if(subCategory.length > 0){
 copyProducts = copyProducts.filter((i)=>subCategory.includes(i.subCategory))
}

if(search && search.trim()){
  const query = search.trim().toUpperCase();
 copyProducts = copyProducts.filter((i)=>i.name.toUpperCase().includes(query))
}

if(sorting === "low"){
copyProducts.sort((a,b)=>a.price - b.price)
}

if(sorting === "high"){
  copyProducts.sort((a,b)=>b.price - a.price)
}



setData(copyProducts)
 },[category, subCategory, search, sorting])


  return (
    <div className="bg-white text-black relative">
      
      <div className="flex justify-center">
        <input onChange={searchQuery}
        className="border w-150 p-2 m-10 rounded-sm "
        type="text" placeholder="SEARCH...." />
        <i className='top-27 right-70 fixed cursor-pointer'><RiSearchLine /></i>
      </div>

      <div className="sort absolute top-11 right-20 border px-2 py-1">
        <select onChange={SortHandling} className="outline-none border-none" name="" id="">
          <option value="sort">SORT</option>
          <option value="low">LOW</option>
          <option value="high">HIGH</option>
        </select>
      </div>

      {/* HERO */}
      <div className="relative h-[25vh] flex items-center justify-center bg-gray-100">

        <h1 className="text-5xl font-bold tracking-wide">
          COLLECTION
        </h1>

        <p className="absolute bottom-5 text-sm text-gray-500">
          Explore our latest drops
        </p>
      </div>

<div className="flex">
<div className="h-115 w-80 border p-4 m-4">
<h4 className="mx-4 my-4 border-b py-1">CATEGORY</h4>

<div className="flex flex-col gap-4 ">
 {
  ["Men", "Women", "Kids"].map((item)=>
  <label className='px-4 py-2 flex justify-between cursor-pointer ' key={item} htmlFor="">
    <span>{item}</span>
    <input onChange={categoryHandling} className='w-5' type="checkbox" value={item} />
  </label>
)}
</div>

<h4 className="mx-4 my-4 border-b py-1 ">SUB-CATEGORY</h4>
<div className="flex flex-col gap-4 ">
  {
    ["Topwear", "Bottomwear", "Winterwear"].map((item)=>
    <label key={item} htmlFor="" className='px-4 py-2 flex justify-between cursor-pointer'>
    <span>{item}</span>
    <input onChange={subCategoryHandling} className='w-5' type="checkbox" value={item}/>
    </label>
    )
  }

</div>
</div>


<div className="w-full flex justify-center flex-wrap m-4 gap-6">
{data.length > 0 ? (
    data.map((obj, index)=>(
  <Card 
  key={index}
  id={obj._id}
  image={obj.image[0]}
  name={obj.name}
  price={obj.price}
  />
     ))
     ) : 
 (<p>NO PRODUCTS</p>)
}
</div>
</div>





    </div>
  );
}

export default Collection;
