import React from "react";
import ReactDOM from 'react-dom'
import './index.css';

const rootElement = document.querySelector('#root');

const jsxElement = (
  <div className='greeting'>
    <div className='greeting__title'>Hello, world!</div>
    <div className='greeting__text'>I'm learning React</div>
  </div>
)

console.log(jsxElement)

ReactDOM.render(jsxElement, rootElement);
