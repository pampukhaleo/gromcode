/* eslint-disable no-undef */

// put your code here
const rootElem = document.querySelector('#root');

const greetings = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!',
);

ReactDOM.render(greetings, rootElem);
