import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

const SearchField = ({ fetchUserData }) => {
  const [userName, setUserName] = useState('');

  const onChange = event => {
    setUserName(event.target.value);
  };

  const handleUserSearch = () => {
    fetchUserData(userName);
  };

  return (
    <div className="name-form">
      <input type="text" className="name-form__input" value={userName} onChange={onChange} />
      <button className="name-form__btn btn" onClick={handleUserSearch}>
        Show
      </button>
    </div>
  );
};

// const mapState = state => {
//   return {
//     counter: state.counter,
//   };
// };
//
const mapDispatch = {
  fetchUserData: usersActions.fetchUserData,
};
//
// const connector = connect(mapState, mapDispatch);
//
// const ConnectedCounter = connector(UserInfo);

export default connect(null, mapDispatch)(SearchField);
