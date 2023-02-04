import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../users.actions';

import Pagination from './Pagination.jsx';
import User from './User.jsx';

const UserList = ({ users, goNext, goPrev, currentPage }) => {
  const usersPerPage = 3;
  //get current weather
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div>
      <Pagination
        goNext={goNext}
        goPrev={goPrev}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={currentUsers.length}
      />
      <ul className="users">
        {currentUsers.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: state.users.usersList,
    currentPage: state.users.currentPage + 1,
  };
};

const mapDispatch = {
  goNext: usersActions.goNext,
  goPrev: usersActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UserList);

export default ConnectedUsersList;
