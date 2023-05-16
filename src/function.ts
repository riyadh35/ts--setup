// normal function 

function add(num1: number, num2: number): number {
    return num1 + num2;
}
add(3, 3)

// Arrow function 

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 2, 3]

const newArray = arr.map((elem: number) => elem * elem);

// function use in object .that call method 

const person: {
    name: string;
    balance: number;
    addBalance(money: number): void;
} = {
    name: 'mezba',
    balance: 5,
    addBalance(money: number) {
        // console.log(`My new Balance is ${this.balance + money}`)
    }
}



// spread operator 
const friends = ['Shamim', 'chnadler', 'joe', 'ross']

const newFriends = ['monica', 'rachel', 'phoebe']

friends.push(...newFriends)
// console.log(friends)



// rest perameter 

const greetFriends = (...friends: string[]): void =>
    // friends.forEach((friend) => console.log(`Hi ${friend}`));

    greetFriends("kasem", "hashem", "gashem", "abul");




// arraw and 