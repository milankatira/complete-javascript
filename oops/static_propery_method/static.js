class config {
  static user = "username";
}

console.log(config.user);

class User {
  static id = 1;

  static cache = {
    1: "some value",
  };

  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = User.id++;
  }


  //TODO this block call only one time 
  static {
    console.log("initializing ...");
  }

  static hashIncache() {
    console.log(this.cache);
  }
  // static compareByAge(user1, user2) {
  //   return user1.age - user2.age;
  // }
  // static compareByIncome(user1, user2) {
  //   return user1.income - user2.income;
  // }
}

const user1 = new User("mk", 20, 25555);

const user2 = new User("mk1", 43, 555);

const user3 = new User("mk2", 15, 5555);

const users = [user1, user2, user3];

// users.sort(User.compareByAge)

// users.sort(User.compareByIncome);

console.log(users);

User.hashIncache();

User.hashIncache();

User.hashIncache();
