import React, { useState } from 'react'
import { GoSearch } from "react-icons/go";

const Dashboard = () => {
  const [city,setCity]=useState('');

  const handleChange=(e)=>{
    setCity(e.target.value);
  }
  return (
    <div className='w-full flex justify-center items-center py-[100px] h-[100vh] ' style={{backgroundColor:"#e2d4ff",fontFamily:"poppins"}}>
       <div className='bg-[blue] py-4 px-10 rounded-md' style={{ backgroundImage: "linear-gradient(45deg, #2f4680, #500ae4)" }}>
       <form>
          <div className='flex gap-2'>
          <input type="text" 
          name='cityname' 
          id='cityname'
          value={city}
          placeholder='Enter your city name'
          className="bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none p-2 text-grey-700 font-semibold px-4 cursor-pointer"
          onChange={handleChange}
          
          />

          <div className='border border-gray-300 py-2 px-2 rounded-lg bg-white cursor-pointer' >
          <GoSearch size={25}/>
          </div>
          </div>
        </form>
       </div>
    </div>
  )
}

export default Dashboard