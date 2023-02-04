import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Weather from './weather/Weather.jsx';

const App = () => {
  return (
    <div className="page">
      <Provider store={store}>
        <Weather />
      </Provider>
    </div>
  );
};

export default App;
