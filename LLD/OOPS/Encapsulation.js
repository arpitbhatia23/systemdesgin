// 2. What is Encapsulation?
// Encapsulation means keeping an object's internal data protected and controlling how that data can be accessed or modified

// Requirements:
// 1. Make balance private using #balance.
// 2. Keep owner public.
// 3. Deposit must reject negative and zero amounts.
// 4. Withdraw must reject negative and zero amounts.
// 5. Prevent withdrawals exceeding the balance.
// 6. getBalance() should print the current balance.
// 7. Prove that direct balance access is blocked.
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

const account1 = new BankAccount({ owner: "Aurpit", balance: 2000 });
const account2 = new BankAccount({ owner: "Tamanna", balance: 3000 });

account1.#balance = 10000;
account1.getBalance();
