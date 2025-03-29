import React, { useState } from 'react';
import { GoSearch } from "react-icons/go";
import WeatherCard from '../WeatherCard/WeatherCard';

const Dashboard = () => {

  //Cityname which will be displayed on the input box
  const [cityName, setCityName] = useState('');
  //City name to search weather
  const [city,setCity]=useState('');

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setCity(cityName.trim());
    setCityName("");
  }

  return (
    <div className='w-full flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#fbc2eb] font-poppins p-6'>
      <div className='bg-white shadow-2xl rounded-xl p-6 w-full max-w-md flex flex-col justify-center items-center'>
        <form className='w-full flex gap-3 items-center' onSubmit={handleSubmit}>
          <input
            type='text'
            name='cityname'
            id='cityname'
            value={cityName}
            placeholder='Enter your city name'
            className='w-full bg-gray-100 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none p-3 text-gray-800 font-medium cursor-pointer'
            onChange={handleChange}
          />
          <button className='bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600 transition-all shadow-md flex items-center justify-center cursor-pointer'>
            <GoSearch size={24} />
          </button>
        </form>
       
       {/* WeatherCard will be only displayed when user has provided input */}
        <div className='mt-6 w-full flex justify-center'>
          {city?<WeatherCard city={city}/>:""}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
