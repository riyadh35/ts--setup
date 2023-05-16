// // // Arrow Function
// // const createArray = (param:string): string[] => {
// //     return [param]
// // }

// // const result = createArray('Bangladesh')

// // make up function in generic function
// // Arrow Function
// const createArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
//     return [param1, param2]
// }

// // Normal Function
// function createArray2<X, Y>(param1: X, param2: Y): [X, Y] {
//     return [param1, param2]
// }

// const result1 = createArray<string, string>('Bangladesh', 'I love Bangladesh');
// const result2 = createArray<boolean, string>(true, 'Brahamanbaria')
// const result3 = createArray<number, number>(12, 11)


// type name = { name: string }
// const result4 = createArray<name, boolean>({ name: "Bangladesh" }, false)




// // Spread Operator

// // const crush = 'Kate Winslet';

// const addMeInCrushMInd = <T>(myInfo: T) => {
//     const crush = 'Kate Winslet';
//     const newData = { ...myInfo, crush }
//     return newData;

// }

// const myInfo = {
//     name: "Persian",
//     age: 200,
//     salary: 100000,
// }

// const result5 = addMeInCrushMInd(myInfo)
// // result 