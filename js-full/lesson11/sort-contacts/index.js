const sortContacts = (arr, bool = true) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (!bool) {
    return arr.sort((a, b) => b.name.localeCompare(a.name));
  }
  return arr.sort((a, b) => a.name.localeCompare(b.name));
};

const contacts = [
  {
    name: 'Tom',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Andrew',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Leo',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Vasyl',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Naty',
    phoneNumber: '777-77-77',
  },
]

console.log(sortContacts(contacts, true))
