import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isFetchingSelector, weatherDataSelector } from './weather.selector';

import Spinner from './Spinner.jsx';
import City from './City.jsx';
import { getWeatherData, weatherDataReceived } from './weather.actions';
import { fetchWeatherData } from './weather.gateway';

const Weather = ({ weatherData, isFetching, fetchWeather, weatherDataReceived }) => {
  if (isFetching) {
    return <Spinner />;
  }

  // useEffect(() => {
  //   fetchWeatherData().then(weatherData => {
  //     weatherDataReceived(weatherData);
  //   });
  // }, []);

  // useEffect(() => {
  //   fetchWeather();
  // }, []);

  if (!weatherData) {
    return null;
  }

  console.log(weatherData);

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
    isFetching: isFetchingSelector(state),
    weatherData: weatherDataSelector(state),
  };
};
//
const mapDispatch = {
  fetchWeather: getWeatherData,
  weatherDataReceived: weatherDataReceived,
};
//
// const connector = connect(mapState, mapDispatch);
//
// const ConnectedCounter = connector(Weather);

export default connect(mapState, mapDispatch)(Weather);
