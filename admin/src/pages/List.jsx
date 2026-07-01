import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios'

function List() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/product/list",
      );
      setProducts(response.data.seeProduct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="flex gap-14">
        <Sidebar />

        <div className="my-4 rounded-xl border">
          <h1 className="m-4 text-[20px] font-medium ">All Product</h1>

          <table className="w-full border-collapse"> 
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-4 text-left font-medium uppercase text-[15px]">Image</th>
                <th className="p-4 text-left font-medium uppercase text-[15px]">Name</th>
                <th className="p-4 text-left font-medium uppercase text-[15px]">Category</th>
                <th className="p-4 text-left font-medium uppercase text-[15px]">Sub-Category</th>
                <th className="p-4 text-left font-medium uppercase text-[15px]">Price</th>
                 <th className="p-4 text-left font-medium uppercase text-[15px]">Sizes</th>
                <th className="p-4 text-left font-medium uppercase text-[15px]">BestSeller</th>
                <th className="p-4 text-left font-medium uppercase text-[15px]">Action</th>
              </tr>
            </thead>
            {/* {Data} */}

            <tbody>
              {products.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-50 ">
                  {/* {Image} */}

                  <td className="p-2">
                    <img src={item.image[0]} alt={item.name} 
                    className="w-18 h-18 rounded object-cover" />
                  </td>

                  {/* {name} */}

                  <td className="p-2 flex flex-col gap-2 mt-4">
                    <h3 className="text-[12px] font-bold px-4">{item.name}</h3>
                    <p className="text-[10px] font-light px-4">{item.description}</p>
                  </td>

                  {/* {cat} */}

                  <td className="p-2">
                    <p className="text-[14px] font-bold px-6">{item.category}</p>
                </td>

                {/* {subcat} */}

                <td className="p-2">
                  <p className="text-[14px] font-bold px-6">
                  {item.subcategory}
                  </p>
                  </td>

                  {/* {price} */}

                  <td className="p-2">
                    <p className="px-2 text-[14px] font-bold">${item.price}</p>
                  </td>

                  {/* {sizes} */}

                  <td className="p-4">
                    <p className="px-2 text-[14px] font-bold">{item.sizes}</p>
                  </td>

                  {/* {bestseller} */}

                  <td className="p-4">
                    <span
                      className={`px-3 rounded-[50px] ${item.bestseller ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                    >
                      {item.bestseller ? "Yes" : "No"}
                    </span>
                  </td>

                  {/* {Action} */}

                  <td className="p-2">
                    <div className="flex">
                      <span className="scale-80 cursor-pointer bg-gray-50 text-red-400 border p-1 rounded-[5px]"><DeleteIcon /></span>
                      <span className="scale-80 cursor-pointer bg-gray-50 text-blue-500 border p-1 rounded-[5px]"><EditIcon /></span>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default List;
