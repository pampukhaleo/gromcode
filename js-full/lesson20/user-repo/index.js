/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this.id = id
    this.name = name
    this.sessionId = sessionId
    Object.freeze(this)
  }
}

class UserRepository {
  constructor(array) {
    this.array = array
    Object.freeze(this)
  }

  getUserNames() {
    const namesArray = []
    this.array.map((user) => namesArray.push(user.name))
    return console.log(namesArray)
  }

  getUserIds() {
    const IdArray = []
    this.array.map((user) => IdArray.push(user.id))
    return console.log(IdArray)
  }

  userNameById(id) {
    const idByNameArray = []
    this.array.map((user) => {
      if (id === +user.id) {
        return idByNameArray.push(user.name)
      }
    })
    return console.log(idByNameArray)
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');
const user1 = new User('2', 'Dom', 'session-id');
Object.freeze(user)
const usersArray = new UserRepository([user, user1])
// получить свойства можем
usersArray.getUserNames()
usersArray.userNameById(1)
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
user.name = 'Bob'; // пытаемся изменить старое значение
console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
