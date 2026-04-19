import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // First geocode the city to get lat/lon
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
      const geoData = await geoRes.json();
      
      if (!geoData.results || geoData.results.length === 0) {
        throw new Error('City not found');
      }
      
      const { latitude, longitude, name, country } = geoData.results[0];
      
      // Fetch weather data
      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`);
      const data = await weatherRes.json();
      
      setWeather({
        location: `${name}, ${country}`,
        temp: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m,
        wind: data.current.wind_speed_10m,
        isDay: data.current.is_day,
        maxTemp: data.daily.temperature_2m_max[0],
        minTemp: data.daily.temperature_2m_min[0]
      });
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`weather-app ${weather ? (weather.isDay ? 'day-theme' : 'night-theme') : 'default-theme'}`}>
      <div className="glass-container">
        <header>
          <h1>Atmo.</h1>
          <form onSubmit={fetchWeather} className="search-form">
            <input 
              type="text" 
              placeholder="Enter a city name..." 
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>
          {error && <p className="error">{error}</p>}
        </header>

        {weather ? (
          <main className="weather-content fade-in">
            <div className="main-temp">
              <h2 className="location">{weather.location}</h2>
              <div className="temp-display">
                <span className="big-temp">{Math.round(weather.temp)}°</span>
              </div>
              <p className="high-low">H: {Math.round(weather.maxTemp)}° L: {Math.round(weather.minTemp)}°</p>
            </div>
            
            <div className="stats-grid">
              <div className="stat-box">
                <span className="stat-label">Wind</span>
                <span className="stat-value">{weather.wind} km/h</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Humidity</span>
                <span className="stat-value">{weather.humidity}%</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Condition</span>
                <span className="stat-value">{weather.isDay ? 'Daytime' : 'Nighttime'}</span>
              </div>
            </div>
          </main>
        ) : (
          <div className="empty-state">
            <p>Enter a city to get real-time meteorological data.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
