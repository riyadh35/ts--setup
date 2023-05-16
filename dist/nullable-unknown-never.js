"use strict";
const searchName = (value) => {
    if (value === null) {
        console.log('there is nothing to search');
    }
    else {
        console.log("Searching....");
    }
};
searchName(null);
// unknown
//convert kmh to ms^-1 use unknown type
const getMyCarSpeed = (speed) => {
    if (typeof speed === 'number') {
        const convertSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertSpeed}`);
    }
    if (typeof speed === "string") {
        const [value, unit] = speed.split(' ');
        const convertSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My speed is ${convertSpeed}`);
    }
    else
        ("There is wrong type");
};
getMyCarSpeed(10);
getMyCarSpeed('10 kmh^-1'); // 10 kmh-1
getMyCarSpeed(true);
// never type 
function throwError(message) {
    throw new Error(message);
}
throwError('Bhai Bhai error hyeche, kandi dimu');
