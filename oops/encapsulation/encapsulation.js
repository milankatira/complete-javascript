class BankAccount {
  customerName;
  accountNumber;
  #balance;
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;

    this.deposit = function (amount) {
      this.#balance += amount;
    };
  }
  withdraw(amount) {
    this.#balance -= amount;
  }
  setBalance(amount) {
    if (isNaN(amount)) {
      throw new Error("amount is not a number");
    }
    this.#balance = amount;
  }

  getBalance() {
    return this.#balance;
  }

  set balance(amount) {
    if (isNaN(amount)) {
      throw new Error("amount is not a number");
    }
    this.#balance = amount;
  }

  get balance() {
    return this.#balance;
  }
}

class currentAccount extends BankAccount {
  transectionLimit = 50000;
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }
  #calculateInterest() {
    console.log("calculating interest...");
  }
  takeBussinessLoad(amount) {
    this.#calculateInterest(), console.log("take Bussiness load , ", amount);
  }
}

const myAccount = new currentAccount("mk", 1000);

//TODO Uncaught SyntaxError: Private field '#balance' must be declared in an enclosing class
myAccount.setBalance(15000);

console.log(myAccount.getBalance());

console.log(myAccount);

myAccount.balance = 400;

// console.log(myAccount);

// myAccount.takeBussinessLoad(500)
