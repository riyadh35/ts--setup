// // keyof guard 

// type Alphaneumerics = string | number;

// function add(param1: Alphaneumerics, param2: Alphaneumerics): Alphaneumerics {
//     if (typeof param1 == 'number' && typeof param2 == 'number') {
//         return param1 + param2;
//     }
//     else {
//         return param1.toString() + param2.toString()
//     }
// }

// add('1', '2')
// add(1, 2)


// // in guard 

// type NoramlUserType = {
//     name: string;
// }

// type AdminUserType = {
//     name: string;
//     role: 'admin';
// }

// function getUser(user: NoramlUserType | AdminUserType) {
//     if ('role' in user) {
//         return `Iam an Admin  and my role is ${user.role}`
//     } else {
//         return `Iam a normale user`
//     }
// }

// const noramalUser1: NoramlUserType = { name: "Mr.Kallu" };
// const adminUser1: AdminUserType = { name: "Mr.Ballu", role: "admin" }

// console.log(getUser(noramalUser1))
// console.log(getUser(adminUser1))


// // instanceof guard 
// class Animal {
//     name: string;
//     species: string;

//     constructor(name: string, species: string) {
//         this.name = name;
//         this.species = species;
//     }
//     // perameter
//     makeSound() {
//         console.log('Iam making sound')
//     }
// }

// class Dog extends Animal {
//     constructor(name: string, species: string) {
//         super(name, species)
//     }
//     markBark() {
//         console.log("Iam bankin")
//     }
// }
// class Cat extends Animal {
//     constructor(name: string, species: string) {
//         super(name, species)
//     }
//     markMeaw() {
//         console.log('Iam Meawing');
//     }
// }


// function isDog(animal: Animal): animal is Dog {
//     return animal instanceof Dog
// };

// function isCat(animal: Animal): animal is Cat {
//     return animal instanceof Cat
// }


// function getAnimal(animal: Animal) {
//     if (isDog(animal)) {
//         animal.markBark()
//     }
//     else if (isCat(animal)) {
//         animal.markMeaw()
//     } else {
//         animal.makeSound()
//     }
// }


// const animal1 = new Dog('German Bhai', 'dog');
// const animal2 = new Cat('persian Bhai', 'cat')
// getAnimal(animal1)