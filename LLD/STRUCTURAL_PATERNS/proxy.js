/**Proxy Pattern
1. Concept first
Definition:

The Proxy Pattern is a structural design pattern that provides a substitute or placeholder object to control access to another object.

In simple words: Instead of accessing an object directly, you access it through a middleman that controls what you can do.
Real-world analogy — Security Guard
Imagine entering an office building.
- You want to enter a restricted room.
- The security guard checks your identity.
- If you have permission, the guard allows entry.
- Otherwise, access is denied. */

/**Coding Challenge — Bank Account Access Proxy
Requirements only · No solution
File: 05-proxy.js

Build a bank account system where a Proxy controls access to account information and withdrawals.
Class 1 — BankAccount
Requirements:
- Constructor accepts balance.
- Store the balance.
- getBalance() method:
  - Print: Account balance: ₹{balance}.
- withdraw(amount) method:
  - If amount is less than or equal to balance, subtract it.
  - Print: ₹{amount} withdrawn successfully.
  - Otherwise, print: Insufficient balance.
Class 2 — BankAccountProxy
Requirements:
- Constructor accepts a BankAccount object and userRole.
- Store both properties.
- Implement getBalance():
  - Only users with role "admin" can access the balance.
  - Otherwise, print: Access denied: You cannot view balance.
- Implement withdraw(amount):
  - Only users with role "admin" can withdraw.
  - Otherwise, print: Access denied: You cannot withdraw.
Testing requirements
1. Create a BankAccount with ₹10,000.
2. Create an admin Proxy.
3. Create a guest Proxy.
4. Test the admin's balance access.
5. Test the guest's balance access.
6. Test the admin withdrawing ₹2,000.
7. Test the guest withdrawing ₹1,000.
8. Check the final balance using the admin Proxy.
Expected output: */

class BankAccount {
  #balance;
  constructor({ balance }) {
    this.#balance = balance;
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

class BankAccountProxy {
  #bankAccount;
  constructor({ bankAccount, userRole }) {
    this.#bankAccount = bankAccount;
    this.userRole = userRole;
  }
  getBalance() {
    if (this.userRole == "admin") {
      this.#bankAccount.getBalance();
      return;
    }
    console.log("Access denied: You cannot view balance");
  }
  withdraw(amount) {
    if (this.userRole == "admin") {
      this.#bankAccount.withdraw(amount);
      return;
    }
    console.log("Access denied: You cannot withdraw.");
  }
}

const bankAccount = new BankAccount({ balance: 1343400000000 });
const admin = new BankAccountProxy({
  bankAccount,
  userRole: "admin",
});

const guest = new BankAccountProxy({
  bankAccount,
  userRole: "guest",
});

admin.getBalance();
guest.getBalance();

admin.withdraw(2000);
guest.withdraw(1000);

admin.getBalance();
