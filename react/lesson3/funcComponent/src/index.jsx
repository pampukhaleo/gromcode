import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Search from "./Search.jsx";

const rootElement = document.querySelector('#root');

const App = () => <Search name={'Tom'} />

ReactDOM.render(<App />, rootElement);
