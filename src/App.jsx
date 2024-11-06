import { useState } from "react"
import React from 'react'

const App = () => {
  const [products, setproducts] = useState([]);
  const [newproduct, setnewproduct] = useState({name:'',price:'',quantity:''});
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [quantity, setquantity] = useState('');
  const[isedit, setisedit] = useState(false)
  
  const submitHandler = (e) => {
      e.preventDefault();
      const newProduct = {name,price,quantity,isedit};

      const copyProduct = [...products];
      copyProduct.push(newProduct)
      setproducts(copyProduct)
      
      setname('');
      setprice('');
      setquantity('')
  }
  console.log(products)
  const clickHandler = (e,i)=>{
    e.preventDefault();
    setisedit(true)
}
const handleDelete = (index)=>{
  setproducts(products.filter((_,i) => i !== index))
}
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-zinc-700'>
       <div className='w-auto border-2 border-emerald-500 rounded-xl  px-10 py-12'>
      <form onSubmit={submitHandler} className='flex flex-col gap-3 '>
        <input value={name} onChange={(e)=> setname(e.target.value)} className='px-2 py-3 bg-transparent border-2 rounded-xl outline-none border-emerald-400 text-white placeholder:text-white font-semibold ' type="text" placeholder='product name' name='name' />
        <input value={price} onChange={(e)=> setprice(e.target.value)} className='px-2 py-3 bg-transparent border-2 rounded-xl outline-none border-emerald-400 text-white placeholder:text-white font-semibold ' type="number" placeholder=' product price' name='price' />
        <input value={quantity} onChange={(e)=> setquantity(e.target.value)} className='px-2 py-3 bg-transparent border-2 rounded-xl outline-none border-emerald-400 text-white placeholder:text-white font-semibold ' type="number" placeholder=' product quantity' name='price' />
        <button className=' rounded-full py-2 bg-emerald-500 text-white font-semibold'>Add product</button>
      </form>
    </div>
    
      {products.map((product,index) => (

        <div key={index} className='mt-10 text-white flex items-center justify-between flex-col gap-3 border-2 border-zinc-600 px-3 py-4 font-semibold rounded-xl'>
            <div>
            <div className="flex gap-2">
          <h4 className=" text-zinc-400">product name:</h4>  
          <h3 className="font-semibold border-b-2 border-zinc-500 ">{product.name}</h3></div>
          <div className="flex gap-2">
          <h4 className=" text-zinc-400">product price: $</h4>
          <h4 className="font-semibold border-b-2 border-zinc-500 ">{product.price}</h4></div>
          <div className="flex gap-2">
          <h4 className=" text-zinc-400">product quantity:</h4>
          <h4 className="font-semibold border-b-2 border-zinc-500">{product.quantity}</h4></div>
          </div>
          <div className='flex gap-4'>
          <button  className='bg-green-600 px-4 py-3  rounded-xl text-sm'>Edit</button>
          <button onClick={()=>handleDelete(index)} className='bg-red-600 px-4 py-3 rounded-xl text-sm'>Delete</button>
          </div>
        </div> ))}
    
      
    
    
    </div>
  )
}

export default App
