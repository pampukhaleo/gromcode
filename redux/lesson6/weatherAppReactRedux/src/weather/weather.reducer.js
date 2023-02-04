import { SHOW_SPINNER, WEATHER_DATA_RECEIVED } from './weather.actions';

const initialState = {
  isFetching: false,
  weatherData: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case WEATHER_DATA_RECEIVED: {
      return {
        ...state,
        weatherData: action.payload.weatherData,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
