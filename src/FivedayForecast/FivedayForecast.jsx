import axios from "axios";
import React, { useEffect, useState } from "react";

const FivedayForecast = ({ city,mode }) => {
  const [forecast, setForecast] = useState([]); // Stores weather data
  const [loading, setLoading] = useState(false); // Shows loading state
  const [error, setError] = useState(""); // Handles errors

  useEffect(() => {
    if (!city) return;

    const fetchForecast = async () => {
      setLoading(true);
      setError("");

      const API_KEY = "c7eb58cb4c4c6e0b7987b81c1f8713cc";
      const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

      try {
        const response = await axios.get(URL);
        const filteredData = response.data.list.filter((item) =>
          item.dt_txt.includes("12:00:00") // Get forecast at noon each day
        );
        setForecast(filteredData);
      } catch (err) {
        setError("Oops! We couldn't fetch the weather. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city]);

  return (
    <div className={`mt-6 p-4 border rounded-lg shadow-md ${!mode?"bg-white":"bg-black"}`}>
      <h3 className={`font-bold text-xl text-gray-800 mb-3 ${mode?"text-white":"text-black"}`}>
        5-Day Weather Forecast for {city}
      </h3>

      {loading && <p className="text-blue-500">Fetching weather data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="mt-2 space-y-3">
        {forecast.map((item, index) => (
          <li key={index} className="p-3 border rounded-lg bg-gray-100 shadow">
            <p className="font-semibold">{new Date(item.dt_txt).toLocaleDateString()}</p>
            <p>🌡 <strong>Temperature:</strong> {item.main.temp}°C</p>
            <p>☁ <strong>Condition:</strong> {item.weather[0].description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FivedayForecast;
