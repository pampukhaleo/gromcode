import React from "react";
import UsersList from "./UsersList.jsx";

const usersData = [
  {
    name: 'Tom',
    age: 17,
    id: '1'
  },
  {
    name: 'Endigo',
    age: 12,
    id: '2'
  },
  {
    name: 'Wolf',
    age: 32,
    id: '3'
  },
  {
    name: 'From',
    age: 34,
    id: '4'
  },

]

class App extends React.Component {

  render() {
    return (
      <UsersList users={usersData}/>
    )
  }
}

export default App;