// // type allies 

// type User = {
//     name: string;
//     age: number;
// }

// // same thing write another way

// interface IUser {
//     name: string;
//     age: number;
// }

// // // object

// // const userWithTypeAlias:User={
// //     name:'Type Alias',
// //     age:100,
// // }

// // const userWithInterface:User={
// //     name:'Interface',
// //     age:200,
// // }

// interface IExtendedUser extends IUser {
//     role: string,
// }

// const extendsUser: IExtendedUser = {
//     name: 'User',
//     age: 2000,
//     role: 'Unknown'
// }


// // In javascript object, function ,array also object



// type addNumberType = (num1: number, num2: number) => number;

// interface IAddNumbers {
//     (num1: number, num2: number): number;
// }

// const addNumbers: IAddNumbers = (num1, num2) => num1 + num2;

// // interface use in array 

// type rollNumbersType = number[];
// interface IRollNumbers {
//     [index: number]: number;// index signature 
// }

// const rullNumber: IRollNumbers = [1, 4, 5]