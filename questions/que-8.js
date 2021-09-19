//TODO higher order function

const mult = (a, b) => {
    return Math.abs(a * b);
}
const div = (a, b) => {
    return Math.abs(a / b);
}
const sub = (a, b) => {
    return Math.abs(a - b);
}

const add = (a, b) => {
    return Math.abs(a + b);
}

const calculation = (num1, num2, operator) => {
    return operator(num1, num2);
}

console.log(calculation(5, 6, mult));
console.log(calculation(5, 6, sub));
console.log(calculation(5, 6, add));
console.log(calculation(30, 6, div));