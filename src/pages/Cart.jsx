import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeToCart } from '../redux/slice'
const Cart = () => {
  const dispatch = useDispatch()
  const storeData = useSelector((state)=>state.custom)
  const[total,setTotal]= useState(0)
  const totalPrice =()=>{
    var total = 0;
    storeData.forEach((item)=>{
      total += item.price 
      setTotal(total)
      
    })
   
  }

  useEffect(()=>{
    totalPrice()
  },[storeData])
 

// handle Delete 

const handleDelete = (data) => {
  dispatch(removeToCart(data.id))
}


  return (
    <div>
       <ul role="list" className="divide-y divide-gray-100">
      {storeData.map((person) => (
        <li key={person.id} className="flex md:justify-center md:max-w-full justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-20 md:gap-x-28 w-full">
            <img className="md:h-24 md:w-24 h-20 w-20  flex-none rounded-full bg-gray-50" src={person.thumbnail} alt="" />
            <div className="min-w-0 flex-auto my-auto">
              <p className="text-sm font-semibold leading-6 md:text-md">{person.title}</p>
              <p className="mt-1 truncate text-xs leading-5  md:text-lg ">{person.price}</p>
              
            </div>
            
          </div>
          <div className="flex justify-center w-2/12  h-9 my-auto ">
              <button onClick={()=>handleDelete(person)}  className='bg-red-400  rounded-sm  cursor-pointer hover:bg-red-500 w-32 whitespace-nowrap md:w-1/2 '>Remove</button>
              </div>
              
        </li>
      ))}
      {
        storeData.length >0 
        ? <h2 className='text-xl font-bold pt-10'>Total Price : <span>{storeData.length > 0 ? total : 0}</span></h2>
        : <h2 className='text-xl font-bold pt-10 text-center'><span>Please Add Product</span></h2>
      }
    </ul>
    </div>
  )
}

export default Cart
