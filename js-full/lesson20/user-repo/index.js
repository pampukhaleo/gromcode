/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(array) {
    this._users = Object.freeze(array);;
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(user => user.name)
  }

  getUserIds() {
    return this._users.map(user => user.id);
  }

  getUserNameById(id) {
    const user = this._users.find(user => user.id === id);
    return user ? user.name : null;
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');
const user1 = new User('2', 'Dom', 'session-id');
// Object.freeze(user)
const usersArray = new UserRepository([user, user1]);
// получить свойства можем
console.log(usersArray.getUserNames());
console.log(usersArray.getUserIds());
console.log('name', usersArray.getUserNameById('1'));
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует