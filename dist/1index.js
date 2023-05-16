"use strict";
const coursre = 'Next level web development';
const number = 123;
const isAdmin = true;
let riyad;
riyad = "Hi, It's me Riyad Hossain";
//**Primitive Types  */
//String
//number
//boolean
//null
//undefined
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
