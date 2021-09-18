//for in vs for of

const name = ['milan', 'katira', 'kanak', 'test']

for (let elements in name) {
    console.log(elements)
}

// 0
// 1
// 2
// 3

for (let elements of name) {
    console.log(elements)
}

// milan
// katira
// kanak
// test