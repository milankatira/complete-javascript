//TODO ==>> NOTE===>> when function created in javascript by default add property on function that called a ptototypes and value of prototype is empty object

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  // this.deposit = function (amount) {
  //   this.balance += amount;
  // };

  // this.withdraw = function (amount) {
  //   this.balance -= amount;
  // };
}

const myAccount = new BankAccount("mk", 1000);

console.log(myAccount);

BankAccount.prototype.test = "this is test";

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

console.log(BankAccount.prototype);

//TODO we can access method created by prototype because it will inherit by function 

//TODO it will save the memory because we bankAcctount constructor we are only passing 3 property 

myAccount.deposit(500);

console.log(myAccount.balance);

