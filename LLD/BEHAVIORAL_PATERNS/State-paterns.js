/**State Pattern
Observer Pattern completed
1. Concept first
Definition:

The State Pattern is a behavioral design pattern that allows an object to change its behavior when its internal state changes. It appears as if the object changes its class.

In simple words:

An object's behavior depends on its current state.

Instead of writing many if/else conditions to handle different states, create separate classes for each state. */

/**5. Coding Challenge — Vending Machine
Requirements only · No solution
File: 03-state.js

Build a vending machine using the State Pattern.
Class 1 — IdleState
Requirements:
- Implement insertMoney(machine, amount).
- Accept money and update the machine's balance.
- Change the machine state to HasMoneyState.
- Print the amount inserted.
Class 2 — HasMoneyState
Requirements:
- Implement selectProduct(machine, product).
- Check whether the inserted balance is enough for the selected product.
- If enough money exists:
  - Deduct the product price.
  - Dispense the product.
  - Reset balance to zero.
  - Change state to IdleState.
- If insufficient money exists, print an appropriate message and keep the current state.
Class 3 — VendingMachine
Requirements:
- Constructor initializes:
  - Balance = 0.
  - Current state = IdleState.
- Implement setState(state).
- Implement insertMoney(amount) to delegate to the current state.
- Implement selectProduct(product) to delegate to the current state.
Product format
Each product should have:
{
  name: "Coke",
  price: 40
}


Testing requirements
1. Create a vending machine.
2. Insert ₹50.
3. Select Coke costing ₹40.
4. Insert ₹20.
5. Select Pepsi costing ₹30.
Expected output:
₹50 inserted
Coke dispensed successfully
₹20 inserted
Insufficient balance for Pepsi


Important rules:
- Don't use if/else to check the current machine state inside VendingMachine.
- Each state should manage its own behavior.
- Use composition to maintain the current state. */

class IdleState {
  insertMoney(machine, amount) {
    machine.balance = amount;
    console.log(`inserted amount ${amount}`);
    machine.state = new HasMoneyState();
  }
}

class HasMoneyState {
  selectProduct(machine, product) {
    if (machine.balance >= product.price) {
      machine.balance -= product.price;
      machine.balance = 0;
      machine.state = new IdleState();
      console.log(` producut dsipence ${product.name}`);
      return;
    }
    console.log(`insufficent blanace`);
  }
}

class VendingMachine {
  constructor() {
    this.balance = 0;
    this.state = new IdleState();
  }
  setState(state) {
    this.state = state;
  }
  insertMoney(amount) {
    this.state.insertMoney(this, amount);
  }
  selectProduct(producut) {
    this.state.selectProduct(this, producut);
  }
}

const machine = new VendingMachine();

machine.insertMoney(50);
machine.selectProduct({ name: "Coke", price: 40 });

machine.insertMoney(20);
machine.selectProduct({ name: "Pepsi", price: 30 });
