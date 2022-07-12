const reverseArray = array => {
  if (Array.isArray(array)) {
    return array.slice().reverse()
  }
  return null
}