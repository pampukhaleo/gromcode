import React from 'react';
// import { connect } from 'react-redux';
// import * as counterActions from './counter.actions';

const SearchField = () => {
  return (
    <div className="name-form">
      <input type="text" className="name-form__input" />
      <button className="name-form__btn btn">Show</button>
    </div>
  );
};

// const mapState = state => {
//   return {
//     counter: state.counter,
//   };
// };
//
// const mapDispatch = {
//   increment: counterActions.increment,
//   decrement: counterActions.decrement,
//   reset: counterActions.reset,
// };
//
// const connector = connect(mapState, mapDispatch);
//
// const ConnectedCounter = connector(UserInfo);

export default SearchField;
