import { useState } from "react"; // Importing React and useState hook for managing state
// Importing CSS styles for the Weather component

const Weather = () => {
  // State variables
  const [city, setCity] = useState(""); // To store the city input by the user
  const [forecastData, setForecastData] = useState(null); // To store weather forecast data
  const [error, setError] = useState(""); // To store any error messages

  const apiKey = import.meta.env.VITE_API_KEY; // Replace with your WeatherAPI key

  // Function to get weather forecast for a specific city
  const getForecast = async () => {
    // Check if city input is empty
    if (!city) {
      setError("Please enter a city name."); // Set error message if city is not provided
      return; // Exit the function
    }

    try {
      // Fetching weather data from WeatherAPI
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1`
      );

      const data = await response.json(); // Parsing response to JSON

      // Check if response is successful
      if (response.ok) {
        setForecastData(data); // Set forecast data to state
        setError(""); // Clear any previous error messages
      } else {
        setError(data.error.message); // Set error message if API returned an error
        setForecastData(null); // Clear forecast data
      }
    } catch {
      setError("Failed to fetch weather data."); // Handle fetch errors
      setForecastData(null); // Clear forecast data
    }
  };

  return (
    <div>
      <h1>Weather Forecast App</h1>
      <input
        type="text"
        placeholder="Enter city" // Placeholder for the city input
        value={city} // Controlled input value
        onChange={(e) => setCity(e.target.value)} // Update city state on input change
      />
      <button onClick={getForecast}>Get Forecast</button>{" "}
      {/* Button to get forecast by city */}
      {error && <p className="error">{error}</p>}{" "}
      {/* Display error message if any */}
      {forecastData && ( // Render forecast data if available
        <div className="weather-info">
          <h2>
            {forecastData.location.name} - {forecastData.location.country}{" "}
            {/* Display location name and country */}
          </h2>
          <h3>Weather for today:</h3> {/* Display forecast duration */}
          <div className="forecast-item">
            <h4>{forecastData.forecast.forecastday[0].date}</h4>{" "}
            {/* Display date */}
            <p>
              Temperature: {forecastData.forecast.forecastday[0].day.avgtemp_c}{" "}
              °C
            </p>{" "}
            {/* Display average temperature */}
            <p>
              Condition:{" "}
              {forecastData.forecast.forecastday[0].day.condition.text}
            </p>{" "}
            {/* Display weather condition */}
            <img
              src={forecastData.forecast.forecastday[0].day.condition.icon} // Display weather condition icon
              alt={forecastData.forecast.forecastday[0].day.condition.text} // Alt text for the image
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather; // Export the Weather component
