import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {addTocart} from "../redux/slice"
const ProductCard = () => {
  const [data, setData] = useState([]);
    const dispatch = useDispatch();
    // into  useSelector i getting add to cart value 
    const cart = useSelector(item=>item.custom)

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // handle the product and send data product data
  const handleAddToCart = (data) => {
    dispatch(addTocart(data))
  }

  return (
    <>
        <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight ">Product Dashboard</h1>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.products ? data.products.map((product) => (
            <div key={product.id} className="group relative shadow-sm">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.thumbnail}
                  alt={product.description}
                  className="h-full w-full object-fill object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm ">
                    <a>
                      
                   <b> {product.title}</b>  
                    </a>
                  </h3>
                  <p className="mt-1 text-sm "><b>{product.rating}</b> </p>
                </div>
                <p className="text-sm font-medium ">₹ <b> {product.price}</b></p>
              </div>
              <div className="flex justify-center w-full ">
              <button onClick={()=>handleAddToCart(product)} className='bg-indigo-500 p-1 rounded-sm mt-4 m-1 cursor-pointer hover:bg-indigo-400 w-1/2 '>Add Cart</button>
              </div>
            </div>
          )):[]}
        </div>
      </div>
    </div>
      
    </>
  )
}

export default ProductCard
