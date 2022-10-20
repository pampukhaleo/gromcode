import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// should render following html
const rootElement = document.querySelector('#root')

const title = <h1 className="title">Todo List</h1>

ReactDOM.render(title, rootElement)

