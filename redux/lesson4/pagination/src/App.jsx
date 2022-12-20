import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import UserList from './users/UserList.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
};

export default App;
