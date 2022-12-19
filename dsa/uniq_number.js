function countUniq(array) {
  if (array.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i+1;
  } else {
    throw new Error("Invalid");
  }
}


const result=countUniq([1,1,2,2,8,9]);

console.log(result);