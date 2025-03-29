import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import WeatherCard from "../WeatherCard/WeatherCard";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import FivedayForecast from "../FivedayForecast/FivedayForecast.jsx";
import { IoMdRefresh } from "react-icons/io";

const Dashboard = () => {
  //Cityname which will be displayed on the input box
  const [cityName, setCityName] = useState("");

  //For night and dark mode
  const [mode,setMode]=useState(false);
  //City name to search weather
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(cityName.trim());
    setCityName("");
  };

  const handleClick=()=>{
    setMode(!mode);
    console.log(mode);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#fbc2eb] font-poppins p-6 ">
      <div className="bg-white shadow-2xl rounded-xl p-6 w-full max-w-md flex flex-col justify-center items-center">
        <form
          className="w-full flex gap-3 items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="cityname"
            id="cityname"
            value={cityName}
            placeholder="Enter your city name"
            className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none p-3 text-gray-800 font-medium cursor-pointer"
            onChange={handleChange}
          />
          <button className="bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600 transition-all shadow-md flex items-center justify-center cursor-pointer">
            <GoSearch size={24} />
          </button>
        </form>
         
         {/*Toggle button */}
        <div className="border rounded-full bg-gray-900 p-1 cursor-pointer flex items-center justify-center absolute top-0 right-0 ">
         <button onClick={handleClick}>
        {mode?  <CiDark size={25} className="text-white cursor-pointer"/>:<CiLight size={25} className="text-white cursor-pointer"/>}
         </button>
        </div>

        {/*Refres button */}
        <div className="border rounded-full bg-gray-900 p-1 cursor-pointer flex items-center justify-center absolute top-0 left-0 ">
        <IoMdRefresh size={25} className='text-white cursor-pointer' onClick={()=>setCity(cityName)}/>
        </div>


        {/* WeatherCard will be only displayed when user has provided input */}
        <div className="mt-6 w-full flex justify-center">
          {city ? <WeatherCard city={city} mode={mode} /> : ""}
        </div>

        {/*5 day Forecast */}
        {city && <FivedayForecast city={city} mode={mode}/>}
      </div>
    </div>
  );
};

export default Dashboard;
