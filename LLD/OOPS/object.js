// An object is a collection of properties (data) and methods (behaviour) grouped together

// Your coding challenge (don't look for solution)
// Create a BankAccount class.
// Requirements
// 1. Each account must have an owner.
// 2. Each account must have a balance.
// 3. Create a deposit(amount) method.
// 4. Create a withdraw(amount) method.
// 5. Create a getBalance() method.
// 6. Create two separate accounts.
// 7. Deposit money into the first account and withdraw money from the second.
// 8. Prove that changing one account does not affect the other.

class BankAccount {
  constructor({ owner, balance }) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    if (!Number.isFinite(amount) || amount <= 0) return;
    this.balance += amount;
    console.log(`your ${amount} is desposit sucessfully`);
  }
  withdraw(amount) {
    if (!Number.isFinite(amount) || amount <= 0) return;
    if (amount > this.balance) {
      console.log(`insufficent balance`);

      return;
    }
    this.balance -= amount;
    console.log(`your ${amount} is withdraw sucessfully`);
    return;
  }
  getBalance() {
    console.log(`your have ${this.balance} in your account`);
  }
}

const account1 = new BankAccount({ owner: "Aurpit", balance: 2000 });
const account2 = new BankAccount({ owner: "Tamanna", balance: 3000 });

account1.deposit(-5000);
account1.getBalance();
account1.withdraw(8000);
account1.getBalance(1000);
account2.withdraw(2000);
account2.getBalance();
