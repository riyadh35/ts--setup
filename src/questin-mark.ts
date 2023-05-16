// ternary operator



const age: number = 22;

// if (age >= 18) {
//     console.log('yes')
// }
// else {
//     console.log('No')
// }

const isAdult = age >= 18 ? "yes" : "no";
console.log(isAdult)


// Nullish coalescing operator
// null and undefineed
const isAuthenticatedUser = "";
const userName  = isAuthenticatedUser ?? "Guest";
const userName2  = isAuthenticatedUser ? isAuthenticatedUser:"Guest";
console.log(userName,userName2);


type Manush = {
    name:string,
    age: number, 
    address :{
        city:"NO City";
        road: "NO Road";
        home?:'';
    }
}

const manush1:Manush = {
    name:"Manush",
    age:100,
    address:{
        city:"NO City",
        road:"NO Road",

    }
}

const home = manush1?.address?.home ??  "NO home" // defaultt ' NO HOme"
console.log({home})