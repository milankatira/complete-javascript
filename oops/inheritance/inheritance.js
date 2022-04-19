//TODO Inheriance in Functional components

// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// function currentAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance);
//   this.transectionLimit = 50000;
// }

// currentAccount.prototype.takeBussinessLoad = function (amount) {
//   console.log("take Bussiness load , ", amount);
// };

// currentAccount.prototype=Object.create(BankAccount.prototype);

// function savingAccount(customerName, balance = 0) {
//   //todo  first parameter is this and other is parameter of function
//   BankAccount.call(this, customerName, balance);
//   this.transectionLimit = 10000;
// }

// savingAccount.prototype = Object.create(BankAccount.prototype);

// savingAccount.prototype.takePersonalLoad = function (amount) {
//   console.log("take Personal load , ", amount);
// };

// const myAccount = new savingAccount("mk", 1000);

// myAccount.deposit(500);

// myAccount.withdraw(100);

// myAccount.takePersonalLoad(500);

// console.log(myAccount);

//TODO Inheriance in class components

class BankAccount {
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function (amount) {
      this.balance += amount;
    };
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

class savingAccount extends BankAccount {
  transectionLimit = 10000;
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }
  takePersonalLoad(amount) {
    console.log("take Personal load , ", amount);
  }
}

class currentAccount extends BankAccount {
  transectionLimit = 50000;
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }
  takeBussinessLoad(amount) {
    console.log("take Bussiness load , ", amount);
  }
}

const myAccount = new currentAccount("mk", 1000);

myAccount.deposit(500);

myAccount.withdraw(100);

myAccount.takeBussinessLoad(100);
console.log(myAccount);
