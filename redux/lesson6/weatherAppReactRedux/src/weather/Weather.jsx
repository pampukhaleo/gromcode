import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { weatherDataSelector } from './weather.selector';

import City from './City.jsx';
import { getWeatherData } from './weather.actions';

const Weather = ({ weatherData, fetchWeather }) => {
  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData.map(citiesData => (
          <City key={citiesData.id} {...citiesData} />
        ))}
      </ul>
    </main>
  );
};

const mapState = state => {
  return {
    weatherData: weatherDataSelector(state),
  };
};
//
const mapDispatch = {
  fetchWeather: getWeatherData,
};
//
// const connector = connect(mapState, mapDispatch);
//
// const ConnectedCounter = connector(Weather);

export default connect(mapState, mapDispatch)(Weather);
