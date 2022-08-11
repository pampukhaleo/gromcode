class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(number) {
    if (number < 0) {
      return false;
    }
    this.age = number;
    if (this.age >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }
    return this.age;
  }

  static createEmpty() {
    return new User('', null)
  }
}

console.log(User.createEmpty());