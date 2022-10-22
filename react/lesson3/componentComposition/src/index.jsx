import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from "./Comment.jsx";

const rootElement = document.querySelector('#root');

const user = {
  name: 'Tom',
  avatarUrl: 'https://github.com/github.png'
}

const App = () => <Comment user={user} text={'Hello'} date={new Date()} />

ReactDOM.render(<App />, rootElement);
