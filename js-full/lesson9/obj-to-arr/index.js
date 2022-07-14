const getPeople = (obj) => {
  const newArr = [];
  Object.values(obj).forEach(room => room.forEach(studentName => newArr.push(studentName.name)))
  return newArr;
};

const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Dan' }, { name: 'Max' }, { name: 'Alex' }],
};

console.log(getPeople(rooms));