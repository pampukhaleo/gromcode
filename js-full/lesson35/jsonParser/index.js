const json = `{ "name": "John", "age": 30 }`;

export const parseUser = string => {
  try {
    return JSON.parse(string);
  } catch (e) {
    return null;
  }
};

// console.log(parseUser(json));
