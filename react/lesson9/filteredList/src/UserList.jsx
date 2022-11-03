import React from "react";
import User from './User.jsx'
import Filter from "./Filter.jsx";

class UserList extends React.Component {
  state = {
    filterText: '',
  }

  onChange = event => {
    this.setState({
      filterText: event.target.value,
    })
  }

  render() {
    const filteredUsers = this.props.users
      .filter(user => user.name.toLowerCase().includes(this.state.filterText))

    return (
      <div>
        <Filter filterText={this.state.filterText} count={filteredUsers.length} onChange={this.onChange} />
        <ul className="users">
          {filteredUsers
            .map(user =>
              <User key={user.id} {...user} />
            )
          }
        </ul>
      </div>
    )
  }
}

export default UserList;