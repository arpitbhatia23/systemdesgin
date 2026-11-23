// Abstraction is hiding the internal implementation details and exposing only the essential functionality that a user needs.
// In simple words: You show what an object can do, not how it does it.

// 2. Coding Challenge — ATM System
// Your task: Implement Abstraction using JavaScript classes.

// Requirements
// 1. Create a BankAccount class.
//    - Store the account owner's name.
//    - Store the account balance.
//    - Implement deposit, withdrawal, and balance-checking functionality.
// 2. Create an ATM class.
//    - It should receive a BankAccount object.
//    - Expose only simple methods such as withdraw(amount) and checkBalance().
//    - Hide the internal steps of the withdrawal process.
//    - The user should not need to interact directly with the internal operations.
// 3. The ATM withdrawal process should internally:
//    - Validate the withdrawal amount.
//    - Check if sufficient balance exists.
//    - Deduct the money if valid.
//    - Print a success or failure message.

class BankAccount {
  #balance;
  constructor({ owner, balance }) {
    this.owner = owner;
    this.#balance = balance;
  }
  deposit(amount) {
    if (!Number.isFinite(amount) || amount <= 0) return;
    this.#balance += amount;
    console.log(`your ${amount} is desposit sucessfully`);
  }
  withdraw(amount) {
    if (!Number.isFinite(amount) || amount <= 0) return;
    if (amount > this.#balance) {
      console.log(`insufficent balance`);

      return;
    }
    this.#balance -= amount;
    console.log(`your ${amount} is withdraw sucessfully`);
    return;
  }
  getBalance() {
    console.log(`your have ${this.#balance} in your account`);
  }
}

class ATM {
  #account;
  constructor(account) {
    this.#account = account;
  }
  withdraw(amount) {
    this.#account.withdraw(amount);
  }
  checkBalance() {
    this.#account.getBalance();
  }
}

const account = new BankAccount({ owner: "aurpit", balance: 5000 });

const atm = new ATM(account);
atm.withdraw(3000);
atm.checkBalance();
