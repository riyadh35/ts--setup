// class Person {
//     takeNap(): void {
//         console.log('Iam Sleeping 8 hours per day')
//     }
// }
// class Student extends Person {
//     takeNap(): void {
//         console.log('Iam Sleeping 10 hours per day')
//     }
// }

// class Developer extends Person {
//     takeNap(): void {
//         console.log(`I am sleeping 5 hours per day`)
//     }
// }


// function getNap(param: Person) {
//     param.takeNap();
// }

// const person1 = new Person();
// const person2 = new Student();
// const person3 = new Developer();

// getNap(person1)
// getNap(person2)
// getNap(person3)



// // Another example

// class Shape {
//     getArea(): number {
//         return 0;
//     }
// }


// // area pi -> pi *r*r

// class Circle extends Shape {
//     radies: number;
//     constructor(radies: number) {
//         super();
//         this.radies = radies;
//     }

//     getArea(): number {
//         return Math.PI * this.radies * this.radies;
//     }
// }

// class Rectangle extends Shape {
//     height: number;
//     width: number;
//     constructor(height: number, width: number) {
//         super();
//         this.height = height;
//         this.width = width;
//     }
//     getArea(): number {
//         return this.height * this.width;
//     }
// }

// function getAreaofShapre(param: Shape) {
//     console.log(param.getArea());
// }

// getAreaofShapre(new Circle(10));
// getAreaofShapre(new Rectangle(10, 12))