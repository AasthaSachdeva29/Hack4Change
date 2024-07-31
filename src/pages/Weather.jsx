import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import ReactAnimatedWeather from 'react-animated-weather';

const Weather = () => {
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const apiKey = '65a336747fa0b4d5a0863236b494f93d';
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
      setForecast(response.data);
      setError('');
    } catch (err) {
      setError('City not found');
      setForecast(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  const getWeatherIcon = (weatherDescription) => {
    switch (weatherDescription) {
      case 'Clear':
        return 'CLEAR_DAY';
      case 'Clouds':
        return 'CLOUDY';
      case 'Rain':
        return 'RAIN';
      case 'Snow':
        return 'SNOW';
      case 'Thunderstorm':
        return 'SLEET';
      case 'Drizzle':
        return 'RAIN';
      case 'Fog':
      case 'Mist':
      case 'Smoke':
      case 'Haze':
      case 'Dust':
      case 'Sand':
      case 'Ash':
      case 'Squall':
      case 'Tornado':
        return 'FOG';
      default:
        return 'PARTLY_CLOUDY_DAY';
    }
  };

  const renderForecast = () => {
    const dailyData = forecast.list.filter((reading) => reading.dt_txt.includes('12:00:00'));
    return dailyData.slice(0, 5).map((reading, index) => (
      <div style={styles.weatherInfo} key={index}>
        <h3>{moment(reading.dt_txt).format('dddd, MMM D')}</h3>
        <ReactAnimatedWeather
          icon={getWeatherIcon(reading.weather[0].main)}
          color="#000"
          size={48}
          animate={true}
        />
        <p>{reading.weather[0].description}</p>
        <p>Temperature: {reading.main.temp}°C</p>
        <p>Humidity: {reading.main.humidity}%</p>
        <p>Wind Speed: {reading.wind.speed} m/s</p>
      </div>
    ));
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f8ff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: 0,
      marginTop:"25px",
    },
    app: {
      textAlign: 'center',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    h1: {
      color: '#333',
    },
    form: {
      margin: '20px 0',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '200px',
    },
    button: {
      padding: '10px 15px',
      fontSize: '16px',
      color: 'white',
      backgroundColor: 'green',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginLeft: '10px',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    forecastContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      marginTop: '20px',
    },
    weatherInfo: {
      backgroundColor: '#e0f7fa',
      borderRadius: '10px',
      padding: '15px',
      margin: '10px',
      width: '180px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    error: {
      color: 'red',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.app}>
        <h1 style={styles.h1}>Weather Prediction</h1>
        <p>{moment().format('dddd, MMMM Do YYYY')}</p>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Get Weather</button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
        {forecast && <div style={styles.forecastContainer}>{renderForecast()}</div>}
      </div>
    </div>
  );
};

export default Weather;
