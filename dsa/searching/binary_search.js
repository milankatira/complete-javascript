function binarySearch(array, number) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let minIndex = Math.floor((min + max) / 2);
    if (array[minIndex] < number) {
      min = minIndex + 1;
    } else if (array[minIndex] > number) {
      max = minIndex - 1;
    } else {
      return minIndex;
    }
  }
  return -1;
}


console.log(binarySearch([1,3,5,7,9],7))