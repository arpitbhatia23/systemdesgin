/**
 * Lesson 3 — Abstract Factory Pattern
Creational Design Patterns · 3 of 5
1. Concept first
Abstract Factory is a creational design pattern that provides an interface for creating families of related objects without specifying their concrete classes.

In simple words, instead of having one factory create one object type, you have factories that create a group of related objects that work together.
 */

/**
 2. Coding Challenge — Payment System
File: 03-abstract-factory.js
Class 1 — UPIPayment
Requirements:

- pay(amount) — print UPI payment details.
Class 2 — UPIReceipt
Requirements:

- generate(amount) — print UPI receipt details.
Class 3 — CardPayment
Requirements:

- pay(amount) — print card payment details.
Class 4 — CardReceipt
Requirements:

- generate(amount) — print card receipt details.
Class 5 — UPIFactory
Requirements:
- createPayment() — return a UPIPayment object.
- createReceipt() — return a UPIReceipt object.
Class 6 — CardFactory
Requirements:
- createPayment() — return a CardPayment object.
- createReceipt() — return a CardReceipt object.
 */

class UPI {
  pay(amount) {
    console.log(`Processing ₹${amount} through UPI`);
  }
}
class UPIReceipt {
  generate(amount) {
    console.log(`UPI Receipt: Payment of ₹${amount}`);
  }
}

class CARD {
  pay(amount) {
    console.log(`Processing ₹${amount} through card`);
  }
}
class CARDReceipt {
  generate(amount) {
    console.log(`card Receipt: Payment of ₹${amount}`);
  }
}

class UPIFactory {
  createPayment() {
    return new UPI();
  }
  createReceipt() {
    return new UPIReceipt();
  }
}
class CARDFactory {
  createPayment() {
    return new CARD();
  }
  createReceipt() {
    return new CARDReceipt();
  }
}

const factory = new UPIFactory();

const payment = factory.createPayment();
const receipt = factory.createReceipt();

payment.pay(500);
receipt.generate(500);
