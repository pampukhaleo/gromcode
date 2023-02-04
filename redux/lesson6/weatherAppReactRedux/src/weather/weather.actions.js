import { fetchWeatherData } from './weather.gateway';

export const SHOW_SPINNER = 'SHOW_SPINNER';
export const WEATHER_DATA_RECEIVED = 'WEATHER_DATA_RECEIVED';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const weatherDataReceived = weatherData => {
  return {
    type: WEATHER_DATA_RECEIVED,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    dispatch(showSpinner());
    fetchWeatherData().then(weatherData => {
      dispatch(weatherDataReceived(weatherData));
    });
  };
};
