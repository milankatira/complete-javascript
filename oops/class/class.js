// TODO ==>> !Error  Uncaught ReferenceError: Cannot access 'BankAccount' before initialization
// const Account = new BankAccount("mk", 1000);
  
class BankAccount {
  constructor(customerName, balance = 0) {
    //property
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function (amount) {
      this.balance += amount;
    };
  }
  //method
  withdraw(amount) {
    this.balance -= amount;
  }
}

const myAccount = new BankAccount("mk", 1000);
myAccount.deposit(500);
myAccount.withdraw(100);
console.log(myAccount);

// BankAccount {
//   customerName: 'mk',
//   accountNumber: 1667117593221,
//   balance: 1400,
//   deposit: [Function (anonymous)]
// }