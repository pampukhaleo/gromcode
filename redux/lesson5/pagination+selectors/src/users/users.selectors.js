export const UsersListSelector = state => {
  return state.users.usersList;
};

export const CurrentPageSelector = state => {
  return state.users.currentPage + 1;
};
