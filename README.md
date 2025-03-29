# Weather App

A React-based weather application that fetches real-time weather data and a 5-day forecast using the OpenWeather API. The app includes a dark/light mode toggle, a refresh button, and an intuitive user interface built with Tailwind CSS.

## Features

- 🌍 Search for any city's weather
- 🌡 Displays current temperature, humidity, wind speed, and weather conditions
- 📅 Provides a 5-day weather forecast
- 🌗 Dark/Light mode toggle
- 🔄 Refresh button to re-fetch weather data
- 🌀 Loading animation while fetching data

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **State Management:** React Context API
- **API:** OpenWeather API
- **Icons:** React Icons

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Get an API key from [OpenWeather](https://openweathermap.org/api) and add it to the project.

4. Start the development server:
   ```bash
   npm start
   ```

## Project Structure
```
weather-app/
│-- src/
│   │-- components/
│   │   │-- WeatherCard.jsx
│   │   │-- FivedayForecast.jsx
│   │-- context/
│   │   │-- WeatherContext.js
│   │-- pages/
│   │   │-- Dashboard.jsx
│   │-- App.jsx
│   │-- index.js
│-- public/
│-- package.json
│-- README.md
```

## How It Works

1. Enter a city name and press search 🔍
2. The app fetches the latest weather data via the OpenWeather API
3. Displays current weather along with a 5-day forecast
4. Use the **dark/light mode toggle** for better UI experience 🌙
5. Click the **refresh button** to update weather data 🔄



## Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request. 😊

## License

MIT License © 2025 Ashish

