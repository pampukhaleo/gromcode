import React from 'react';
import { connect } from 'react-redux';
import { isFetchingSelector, userDataSelector } from './users.selector';
// import * as counterActions from './counter.actions';

import Spinner from './Spinner.jsx';

const UserInfo = ({ userData, isFetching }) => {
  if (isFetching) {
    return <Spinner />;
  }

  if (!userData) {
    return null;
  }

  return (
    <div className="user">
      <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    isFetching: isFetchingSelector(state),
    userData: userDataSelector(state),
  };
};
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

export default connect(mapState)(UserInfo);
