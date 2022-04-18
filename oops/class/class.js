// TODO ==>> !Error  Uncaught ReferenceError: Cannot access 'BankAccount' before initialization
//const Account = new BankAccount("mk", 1000);
  
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

const myAccount = new BankAccount("mk", 1000);

myAccount.deposit(500);

myAccount.withdraw(100);
console.log(myAccount);
