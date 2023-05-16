const arrowofNumber = [1, 2, 3]
// make string 

const arrowofStrings = arrowofNumber.map((number) => number.toString());
// console.log(arrowofStrings);


type Volume = {
    height: number;
    width: number;
    deepth: number;
}

type Area<T> = {
    // [key in keyof Volume]:Volume[key]
    [key in keyof T]: T[key]
}

const Area1: Area<{ height: number; width: string }> = { height: 10, width: '23' };
