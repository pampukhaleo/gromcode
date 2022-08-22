/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this.is = id
    this.name = name
    this.sessionId = sessionId
  }
}

class UserRepository {
  // put your code here
}

// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
