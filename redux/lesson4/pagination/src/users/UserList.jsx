import React from 'react';
import { connect } from 'react-redux';

import Pagination from './Pagination.jsx';
import User from './User.jsx';

const UserList = ({ users }) => {
  return (
    <div>
      <Pagination />
      <ul className="users">
        {users.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: state.users.usersList,
  };
};
//
// const mapDispatch = {
//   increment: counterActions.increment,
//   decrement: counterActions.decrement,
//   reset: counterActions.reset,
// };
//
const connector = connect(mapState);

const ConnectedUsersList = connector(UserList);

export default ConnectedUsersList;
