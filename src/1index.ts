const coursre: string = 'Next level web development'

const number: number = 123

const isAdmin: boolean = true;



let riyad: string;

riyad = "Hi, It's me Riyad Hossain"


//**Primitive Types  */
//String
//number
//boolean
//null
//undefined

function generateAdder(a: number): (b: number) => number {
    return function (b: number) {
        return a + b;
    }
}

const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5))