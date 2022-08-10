// create User constructor. export

// User creates obj with keys name and age

// User.prototype.sayHi - logs Hi, I am this.name
// User.prototype.requestNewPhoto - logs New photo request was sent for this.name

// User.prototype.setAge - sets new this.age and logs New photo request was sent for this.name if age >= 25
// setAge return false if age < 0
// setAge return input if > 0

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (number) {
  if (number >= 25) {
    this.age = number;
    console.log(`New photo request was sent for ${this.name}`);
  }
  if (number < 0) {
    return false;
  }
  this.age = number;
  return this.age;
};

const user = new User('Tom', 30)

console.log(user.setAge(5));
console.log(user);