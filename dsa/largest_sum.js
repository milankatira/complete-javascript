function findlargest(array, num) {
  if (num > array) {
    throw new Error("num is not greter than array");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        temp += array[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}

console.log(findlargest([-5, -4, -3, -2, 0, 2, 4, 6, 8], 4));
