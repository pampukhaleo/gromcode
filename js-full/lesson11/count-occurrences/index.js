const countOccurrences = (text, str) => {
  let count = 0;
  let textArray = text.toLowerCase().split('')
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] === str) // "a" - это контент для поиска
      count += 1 // При поиске ct + 1
  };
  return console.log(count)
};

countOccurrences('text inda text', 'te')
