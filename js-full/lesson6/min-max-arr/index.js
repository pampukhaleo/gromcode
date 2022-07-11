function checker(arr) {
  if (Array.isArray(arr)) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    if (min + max > 1000) {
      return true;
    }
    return false;
  }
  return null;
}

console.log(checker([1, 2, 3, 800]));
