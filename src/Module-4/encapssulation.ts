interface IVehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

class Vehicle implements IVehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: number,
    ) { }
    startEngine(): void {
        console.log('Iam starting engine....')
    }
    stopEngine(): void {
        console.log('Iam stoping engine ..........')
    }
    move(): void {
        console.log('Iam syopping engine')
    }
}

const vehicle1 = new Vehicle("car", "Toyota", 200)