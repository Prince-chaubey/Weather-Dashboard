import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  WiHumidity,
  WiStrongWind,
} from "react-icons/wi";

const WeatherCard = ({ city }) => {
  const [area, setArea] = useState(null);
 const [loading,setLoading]=useState(false);
  useEffect(() => {
    if (!city) {
      return alert("City name is empty. Please provide a city name first.");
    }

    const fetchData = async () => {
      const apikey = "c7eb58cb4c4c6e0b7987b81c1f8713cc";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

      try {
        setLoading(true); //we have to set the loading true when we start the fetching data
        const response = await axios.get(url);
        setArea(response.data);
      } catch (err) {
        console.log("Error while fetching data");
      }
      finally{
        setLoading(false) //now set false because loading is finished.
      }
    };


    fetchData();
  }, [city]);

  return (
    <div
    className="flex flex-col items-center justify-center p-6 text-white rounded-2xl w-80 shadow-xl"
    style={{
      fontFamily: "Poppins",
      background: "linear-gradient(to bottom, #4B0082, #00BFFF)",
    }}
  >
    {loading ? (
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        <p className="text-lg font-semibold mt-3">Fetching weather...</p>
      </div>
    ) : area ? (
      <>
        <img
          src={`https://openweathermap.org/img/wn/${area.weather?.[0]?.icon}@2x.png`}
          alt={area.weather?.[0]?.description ?? "N/A"}
          className="mx-auto animate-bounce"
        />

        {/* Temperature */}
        <div>
          <p className="text-4xl font-bold text-white">{area.main?.temp ?? "N/A"}℃</p>
        </div>
        <p className="text-center text-5xl font-bold text-gray-100">{area.name}</p>

        <div className="flex gap-4 mt-5">
          <div className="flex gap-1 bg-gray-900 text-gray-200 justify-center items-center px-3 py-2 rounded-lg">
            <WiHumidity size={40} />
            <p className="text-lg mr-1">{area.main?.humidity ?? "N/A"}%</p>
          </div>

          <div className="flex gap-1 bg-gray-900 text-gray-200 justify-center items-center px-3 py-2 rounded-lg">
            <WiStrongWind size={40} />
            <p className="text-lg mr-1">{area.wind?.speed ?? "N/A"} Km/h</p>
          </div>
        </div>
      </>
    ) : (
      <p className="text-gray-300">No weather data available.</p>
    )}
  </div>

  );
};

export default WeatherCard;
