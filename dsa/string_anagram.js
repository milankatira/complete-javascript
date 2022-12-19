function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let counter = {};
  for (let letter in string1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }

  for (let item in string2) {
    if (!counter[item]) {
      return false;
    }
    counter[item] -= 1;
  }
  return true;
}

console.log(isAnagram('milaan','mliain'));

//liniar complaxity o(n)
