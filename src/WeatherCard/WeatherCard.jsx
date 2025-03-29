import axios from "axios";
import React, { useEffect, useState } from "react";
import { WiHumidity, WiStrongWind } from "react-icons/wi";

const WeatherCard = ({ city, mode }) => {
  const [area, setArea] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city.trim()) {
      alert("Please enter a city name to search");
      return; // Prevents setting an empty city
    }

    const fetchData = async () => {
      setLoading(true);
      setError("");

      const apikey = "c7eb58cb4c4c6e0b7987b81c1f8713cc";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

      try {
        const response = await axios.get(url);
        setArea(response.data);
      } catch (err) {
        setError("Error fetching weather data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-2xl w-80 shadow-xl ${
        mode ? "bg-gray-900 text-white" : "bg-blue-300 text-black"
      }`}
      style={{ fontFamily: "Poppins" }}
    >
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          <p className="text-lg font-semibold mt-3">Fetching weather...</p>
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : area ? (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${area.weather?.[0]?.icon}@2x.png`}
            alt={area.weather?.[0]?.description ?? "N/A"}
            className="mx-auto animate-bounce"
          />
          <p className="font-semibold text-xl mb-2">{area.weather?.[0]?.main ?? "N/A"}</p>

          <div>
            <p className="text-4xl font-bold text-white mb-2">{area.main?.temp ?? "N/A"}℃</p>
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
