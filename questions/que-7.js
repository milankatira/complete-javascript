let arr = [1, 2, 3, 4];

let avg = arr.reduce((accum, currval, index, array) => {
    return accum += currval;
})

console.log(avg);