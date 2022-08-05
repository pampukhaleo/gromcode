const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(name) {
    [this.firstName, this.lastName] = name.split(' ')
  },
};

console.log(user.getFullName());
user.setFullName('Leo Pampukha');
console.log(user.getFullName());
