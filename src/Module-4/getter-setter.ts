// class BankAccound {
//     public readonly id: number;
//     public name: string;
//     private _balance: number;

//     constructor(id: number, name: string, balance: number) {
//         this.id = id;
//         this.name = name;
//         this._balance = balance;
//     }
//     // getter
//     get balance(): number {
//         return this._balance;
//     }

//     // // method
//     // getBalance(): number {
//     //     return this._balance;
//     // }

//     set deposite(amount: number) {
//         this._balance = this.balance + amount;
//     }

//     // addDeposit(amount: number) {
//     //     this._balance = this._balance + amount;
//     // }
// }

// class StudentAccount extends BankAccound {
//     test() {
//         // this._balance
//     }
// }

// const myAccount = new BankAccound(22, 'Abul', 20);
// console.log(myAccount.balance);
// myAccount.deposite = 20;
// console.log(myAccount.balance)