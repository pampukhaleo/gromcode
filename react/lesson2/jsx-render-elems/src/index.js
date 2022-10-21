import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');

const renderedElement = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  </>
);

ReactDOM.render(renderedElement, rootElement);
