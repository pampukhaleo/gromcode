import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElement = document.querySelector('#root');

const render = element => {
  const seconds = new Date().getSeconds()
  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000'
  const textColor = seconds % 2 !== 0 ? '#fff' : '#000'

  const styles = {
    color: textColor,
    backgroundColor
  }

  const secondsElement = (
    <div className='seconds' style={styles}>
      Now is {seconds}
    </div>
  );

  ReactDOM.render(secondsElement, element);
}

setInterval(() => {
  render(rootElement)
}, 1000)
