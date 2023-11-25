import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Dashboard = () => {
    const [data,setData]= useState(null)
    const fatchData =async()=>{
        try {
            const res =await fetch("https://dummyjson.com/products")
             const data = await res.json()
             setData(data)
        } catch (error) {
            console.log(error)
        }
       
    }
useEffect(()=>{
    fatchData()
},[])
  return (
    <div>
      
    </div>
  )
}

export default Dashboard
