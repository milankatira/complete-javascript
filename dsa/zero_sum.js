//Todo checking sum zero

function getSumZeroPair(array) {
  for (let number of array) {
    for (let j = 1; j < array.length; j++) {
      if (number + array[j] === 0) {
        return [number, array[j]]
      }
    }
  }
}

//time complaxity
//0(n^2) quandratic complexity
var startTime = performance.now()
console.log(getSumZeroPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]))
var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

function getSumZeroPairOpt(array) {
  let left = 0
  let right = array.length - 1

  while (left < right) {
    sum = array[left] + array[right]

    if (sum === 0) {
      return [array[left], array[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

//time complaxity
//0(n) quandratic complexity

var startTimeOpt = performance.now()
console.log(getSumZeroPairOpt([-5, -4, -3, -2, 0, 2, 4, 6, 8]))
var endTimeOpt = performance.now()
console.log(
  `Call to doSomething took ${endTimeOpt - startTimeOpt} milliseconds`,
)
