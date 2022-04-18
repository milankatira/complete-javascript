function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.withdraw = function (amount) {
    this.balance -= amount;
  };
}

const myAccount = new BankAccount("mk", 1000);

console.log(myAccount);

console.log(myAccount.customerName);

myAccount.balance = 500;

myAccount.deposit(500);

myAccount.withdraw(100);

console.log(myAccount.balance);
