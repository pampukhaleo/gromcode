import React from 'react';
// import { connect } from 'react-redux';
// import * as counterActions from './counter.actions';

const UserInfo = () => {
  return (
    <div className="user">
      <img
        alt="User Avatar"
        src="https://avatars0.githubusercontent.com/u/10639145?v=4"
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">Apple</span>
        <span className="user__location">Cupertino, CA</span>
      </div>
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

export default UserInfo;
