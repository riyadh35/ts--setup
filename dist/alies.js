"use strict";
const crush1 = {
    name: 'Moina',
    age: 23,
    profession: 'Web developer',
    address: 'ugenda'
};
const crush2 = {
    name: 'Pakhi',
    age: 18,
    profession: 'Next Level Web Developer',
    address: 'Mexico'
};
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
