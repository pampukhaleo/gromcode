import React from 'react';
import TodoList from './tasks/TodoList.jsx';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <h1 className="title">Todo List</h1>
      <TodoList />
    </Provider>
  );
}

export default App;
