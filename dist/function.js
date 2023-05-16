"use strict";
// normal function 
function add(num1, num2) {
    return num1 + num2;
}
// Arrow function 
const addArrow = (num1, num2) => num1 + num2;
const arr = [1, 2, 3];
const newArray = arr.map((elem) => elem * elem);
// function use in object 
const person = {
    name: 'mezba',
    balance: 5,
    addBalance(money) {
        // console.log(`My new Balance is ${this.balance + money}`)
    }
};
// spread operator 
const friends = ['Shamim', 'chnadler', 'joe', 'ross'];
const newFriends = ['monica', 'rachel', 'phoebe'];
friends.push(...newFriends);
// console.log(friends)
// rest perameter 
const greetFriends = (...friends) => 
// friends.forEach((friend) => console.log(`Hi ${friend}`));
greetFriends("kasem", "hashem", "gashem", "abul");
// arraw and
