

// type Declare
type CrushType = {
    name: string,
    age?: number,//optional 
    profession: string,
    address: string,
}



const cruh1: CrushType = {
    name: 'Moina',
    age: 23,
    profession: 'Web developer',
    address: 'ugenda'
}

const crus2: CrushType = {
    name: 'Pakhi',
    age: 18,
    profession: 'Next Level Web Developer',
    address: 'Mexico'
}


//
type OperationType = (
    x: number,
    y: number
) => number

const calculate = (
    number1: number,
    number2: number,
    operation: OperationType
) => {
    return operation(number1, number2);
}

calculate(10, 20, (x, y) => x + y)
calculate(10, 20, (x, y) => x - y)
calculate(10, 20, (x, y) => x * y)