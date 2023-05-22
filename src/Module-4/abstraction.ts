// interface 

// interface IVehicle{
//     name:string;
//     model:string;
// }

// const vehicle:IVehicle={
//     name:'car',
//     model:'200'
// }
    //dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// interface IVehicle {
//     startEngine():void;
//     stopEngine():void;
//     move():void;
// }

// class Vehicle implements IVehicle{
//     constructor(
//         public name:string,
//         public brand:string,
//         public model: number,
//     ){}
//     startEngine(): void {
//         console.log('Iam starting engine....')
//     }
//     stopEngine(): void {
//         console.log('Iam stoping engine ..........')
//     }
//     move(): void {
//         console.log('Iam syopping engine')
//     }
//     test(){
//         console.log("I am for testing purpose")
//     }
// }

// const vehicle1 = new Vehicle ("car", "Toyota", 200)


//                     // abstract class
                    
// abstract class Vehicle {
//     constructor(
//         public name:string,
//         public brand:string,
//         public model: number,
//     ){}
//     abstract startEngine(): void 
//     abstract stopEngine(): void
//     move(): void {
//         console.log('Iam syopping engine')
//     }
// }

// class Car extends Vehicle {
//     startEngine(): void {
//         console.log('Iam Starting Engine')
//     }
//     stopEngine(): void {
//         console.log('Iam Stop the engine......')
//     }
// }