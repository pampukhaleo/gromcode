import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from "./Greeting.jsx";

const rootElement = document.querySelector('#root');

const App = () => <Greeting firstName={'Tom'} lastName={'Handsome'} birthDate={new Date('1991-08-31')} />

ReactDOM.render(<App />, rootElement);
