

// //  Mocking
// const makePromise = (): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//         const data: string = 'Data is fetched';
//         if (data) {
//             resolve(data);
//         }
//         else {
//             reject("Faile to fetched data!!!");
//         }
//     })
// }

// const getPromiseData = async (): Promise<string> => {
//     const data = await makePromise();
//     return data;
// }


// // Object

// const makePromiseObject = (): Promise<object> => {
//     return new Promise<object>((resolve, reject) => {
//         const data: object = { data: 'Data is fetched' };
//         if (data) {
//             resolve(data);
//         }
//         else {
//             reject("Faile to fetched data!!!");
//         }
//     })
// }
// // get data
// const getPromiseDataObject = async (): Promise<object> => {
//     const data = await makePromiseObject();
//     return data;
// }



// // call json placeholder api

// interface ITodo {
//     userId: number,
//     id: number,
//     title: string,
//     completed: boolean
// }



// const getTodo = async (): Promise<ITodo> => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     return await response.json()
// }

// const getTodoData = async (): Promise<void> => {
//     const result = await getTodo();
//     console.log(result)
// }

// getTodoData();   