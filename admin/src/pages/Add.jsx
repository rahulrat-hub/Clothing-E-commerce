import {useState} from "react";
import axios from 'axios'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {toast} from 'react-toastify'
import upload_icon from '../assets/upload_icon.jpg'


const Add = () => {
  
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Men")
const [subcategory, setSubCategory] = useState("Topwear")
const [price, setPrice] = useState("")
const [bestseller, setBestSeller] = useState(false)
const [sizes, setSizes] = useState([])
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)
  
  const DataHandler = async (e) => {
e.preventDefault()

try{
  const formData = new FormData();

formData.append("name", name);
formData.append("description", description);
formData.append("category", category);
formData.append("subcategory", subcategory);
formData.append("price", price);
formData.append("bestseller", bestseller);
formData.append("sizes", JSON.stringify(sizes))

image1 && formData.append("image1", image1)
image2 && formData.append("image2", image2)
image3 && formData.append("image3", image3)
image4 && formData.append("image4", image4)

const alldata = await axios.post("http://localhost:8000/api/product/add", formData) 
console.log(image1);
console.log(image2);
console.log(image3);
console.log(image4);
if(alldata.data.success){
  toast.success(alldata.data.message);
  setName("");
  setDescription("");
  setPrice("")
  setImage1(false);
  setImage2(false);
  setImage3(false);
  setImage4(false);
}else{
  toast.error(alldata.data.message)
} 
}catch (error){
  console.log(error.message)
  console.log(error.response?.data)
  toast.error(error.response?.data?.message || error.message)
}
}

return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
         <Sidebar />

        {/* Main Form */}
        <div className="flex-1 p-10 max-w-4xl">
          <form className="flex flex-col gap-6" onSubmit={DataHandler}>
            {/* Upload Images */}
            <div>
              <p className="mb-3 text-lg font-medium">Upload Images</p>

              <div className="flex gap-3 ">
                {[1, 2, 3, 4].map((item) => {

                   const Imagesrc = 
                      item === 1 && image1 
                      ? URL.createObjectURL(image1)
                      : item === 2 && image2 
                      ? URL.createObjectURL(image2)
                      : item === 3 && image3 
                      ? URL.createObjectURL(image3)
                      : item === 4 && image4 
                      ? URL.createObjectURL(image4)
                      : null

                      console.log(Imagesrc)
                    
                 return( <label
                 htmlFor={`image${item}`}
                    key={item}
                    className="w-28 h-28 border border-dashed flex flex-col items-center justify-center cursor-pointer"
                  >
                   {
                    Imagesrc 
                    ? ( <img className="w-full h-full object-cover" src={Imagesrc} alt="" />)
                    : ( <div>
                    <img className="h-12 w-12 object-contain" src={upload_icon} alt="" />
                    <p className="text-gray-400 ">Upload</p>
                    </div>

                 )}
                   
                   <input
                    onChange={(e)=>{
                      if(item === 1){setImage1(e.target.files[0])}
                      if(item === 2){setImage2(e.target.files[0])}
                      if(item === 3){setImage3(e.target.files[0])}
                      if(item === 4){setImage4(e.target.files[0])}
                    }}
                    id={`image${item}`}
                     type="file" 
                     hidden />
                  </label>
                 )
})}
              </div>
            </div>

            {/* Product Name */}
            <div>
              <p className="mb-2 font-medium">Product Name</p>

              <input
                type="text"
                onChange={(e)=>setName(e.target.value)}
                value={name}
                placeholder="Type here"
                className="w-full border p-3 rounded outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <p className="mb-2 font-medium">Product Description</p>

              <textarea
                rows="5"
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
                placeholder="Type here"
                className="w-full border p-3 rounded outline-none"
              />
            </div>

            {/* Category */}
            <div className="flex gap-5 flex-wrap">
              <div>
                <p className="mb-2 font-medium">Product Category</p>

                <select
                onChange={(e)=>setCategory(e.target.value)}
                value={category} className="border p-3 rounded w-44">
                  <option>Men</option>
                  <option>Women</option>
                  <option>Kids</option>
                </select>
              </div>

              <div>
                <p className="mb-2 font-medium">Product Sub-Category</p>

                <select 
                onChange={(e)=>setSubCategory(e.target.value)}
                value={subcategory} className="border p-3 rounded w-52">
                  <option>Topwear</option>
                  <option>Bottomwear</option>
                  <option>Winterwear</option>
                </select>
              </div>

              <div>
                <p className="mb-2 font-medium">Product Price</p>

                <input
                onChange={(e)=>setPrice(e.target.value)}
                  type="number"
                  value={price}
                  placeholder="0"
                  className="border p-3 rounded w-36"
                />
              </div>
            </div>

            {/* Sizes */}
            <div>
              <p className="mb-3 font-medium">Product Sizes</p>

              <div className="flex gap-3">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                  onClick={()=>setSizes((pre)=>
                  pre.includes(size)
                  ? pre.filter((i) => i !== size)
                  : [...pre, size]
                  )}
                    type="button"
                    key={size}
                    className={`bg-slate-100 px-5 py-2 rounded cursor-pointer ${sizes.includes(size) ? "bg-gray-50 border text-red-600" : "bg-slate-200"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Bestseller */}
            <div className="flex items-center gap-3">
              <input type="checkbox" 
              onChange={()=>setBestSeller((prev) => (prev = !prev))} />
              <p>Add to bestseller</p>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-black text-white px-14 py-3 rounded"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;