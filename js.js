// Encapsulation
class BankAccount {
  constructor(accountHolder, initialBalance) {
    this._accountHolder = accountHolder;
    this._balance = initialBalance || 0;
  }

  get Balance() {
    return this._balance;
  }

  set Balance(newBalance) {
    this._balance = newBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
    } else {
      console.error("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && this._balance >= amount) {
      this._balance -= amount;
    } else {
      console.error("Invalid withdrawal amount or insufficient balance.");
    }
  }

  getAccountHolder() {
    return this._accountHolder;
  }
}

const myAccount = new BankAccount("Elena", 1000);

console.log(`Account holder: ${myAccount.getAccountHolder()}`);
console.log(`Initial balance: ${myAccount.Balance}`);

myAccount.deposit(500);
console.log(`Updated balance after deposit: ${myAccount.Balance}`); 

myAccount.withdraw(200);
console.log(`Updated balance after withdrawal: ${myAccount.Balance}`); 


// Inheritance and Polymorphism
class Animal {
    constructor(name) {
        this.name = name;
    }
    getInfo() {
        return this.name; 
    }
}
class Mammal extends Animal {
    constructor(name, habitat) {
        super(name);
        this.habitat = habitat;
    }
    getInfo() {
        return `${super.getInfo()} lives in ${this.habitat}`;
    }
    run() {
        return "It can run. ";
    }
    whoIsGoodDog() {
        return "woof woof";
    }
}
class Bird extends Animal {
    constructor(name, habitat) {
       super(name);
       this.habitat = habitat; 
    }
    getInfo() {
        return `${super.getInfo()} lives in ${this.habitat}`;
    }
    fly() {
        return "It can fly. ";
    }
}
class Dog extends Mammal {
    constructor(name, breed) {
        super(name, "land");
        this.breed = breed;
    }
    getInfo() {
        return `${super.getInfo()} is a ${this.breed}`;
    }
}
class Penguin extends Bird {
    constructor(name, species) {
        super(name, "water");
        this.species = species;
    }
    fly() {
        return " Can't fly. ";
    }
    swim() {
        return "It can swim. ";
    }
}

const dog = new Dog("Cache", "Staffordshire bull terrier");
console.log(dog.getInfo());
console.log(dog.run());
console.log(dog.whoIsGoodDog());

const penguin = new Penguin("Pengy", "Emperor Penguin");
console.log(penguin.getInfo());
console.log(penguin.fly());
console.log(penguin.swim());





