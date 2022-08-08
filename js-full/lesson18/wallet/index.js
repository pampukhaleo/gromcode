// create object that sends invitations

// export event object
// has key message with invitation text
// has guests array with names, age and emails
// has method getInvitations returns invitation object with email and message who are above 18 age

const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'John', age: 18, email: 'example@server.com' },
    { name: 'Leo', age: 17, email: 'example2@server.com' },
    { name: 'Foma', age: 19, email: 'example3@server.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(guest => guest.age >= 18)
      .map(guest => ({
        email: guest.email,
        message: `Dear ${guest.name}! ${this.message}`
      }))
  }
};

console.log(event.getInvitations());
