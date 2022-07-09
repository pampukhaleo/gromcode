let sum = 0;

for(let i=0; i <= 1000; i++) {
  sum += i;
}

const div = sum / 1234;
const mod = sum % 1234;

div > mod ? console.log(true) : console.log(false)