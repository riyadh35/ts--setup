// // const rollNumber : Array<number> = [4,12,4];
// // const rollNumber2:Array<string>= ['44','114','12'];
// // const rollNumber3: Array<boolean> = [true,false];

// // const userNameAndRollNumbers : Array<{name:string , roll:number}> = [
// //     {
// //         name:'Mr.X',
// //         roll:1
// //     },
// //     {
// //         name:'Mr.Y',
// //         roll:2
// //     }
// // ]


// type GenericTuple<x, y> = [x, y]

// const relation: GenericTuple<string, string> = ["Person", "Kate Winslet"];

// // type RelationWithSalaryType = {name:string; salary:number}

// interface RelationWithSalaryInterface {
//     name: string,
//     salary: number
// }

// const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [{
//     name: 'Persian',
//     salary: 1000000,
// },
//     "kkate Winslet"
// ]
// const RelationWithSalaryInterface: GenericTuple<RelationWithSalaryInterface, string> = [{
//     name: 'Persian',
//     salary: 1000000,
// },
//     "kkate Winslet"
// ]



// type GenericArray<T> = Array<T>
// const rollNumber: GenericArray<number> = [4, 12, 4];
// const rollNumber2: GenericArray<string> = ['44', '114', '12'];
// const rollNumber3: GenericArray<boolean> = [true, false];



// type NameRollType = { name: string, roll: number };

// const userNameAndRollNumbers: Array<NameRollType> = [
//     {
//         name: 'Mr.X',
//         roll: 1
//     },
//     {
//         name: 'Mr.Y',
//         roll: 2
//     }
// ]


// // Generic Interface

// interface CrushInterface<T> {
//     name: string;
//     husband: T
// }

// const crush1: CrushInterface<boolean> = {
//     name: 'Kate Winslet',
//     husband: true
// }


// const crush2: CrushInterface<string> = {
//     name: "Emma Watson",
//     husband: "tom Kako"
// };