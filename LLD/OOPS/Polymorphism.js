// 1. Definition
// Polymorphism means "many forms." It allows the same method or interface to behave differently
// depending on which object is using it.

// 3. Coding Challenge — Payment System
// Your task: Implement polymorphism using JavaScript classes.
// Requirements
// 1. Create a parent class Payment
// - Create a method pay(amount).
// - It should print a generic payment message.
// 2. Create a child class UPIPayment
// - Inherit from Payment.
// - Override pay(amount).
// - Print the amount being paid through UPI.
// 3. Create a child class CardPayment
// - Inherit from Payment.
// - Override pay(amount).
// - Print the amount being paid through a card.
// 4. Create a child class CashPayment
// - Inherit from Payment.
// - Override pay(amount).
// - Print the amount being paid in cash.

class Payment {
  pay(amount) {
    console.log(`payment of ${amount}is sucessfull`);
  }
}
class UPIPayment extends Payment {
  pay(amount) {
    console.log(`payment of ${amount}is sucessfull by upi`);
  }
}
class CardPayment extends Payment {
  pay(amount) {
    console.log(`payment of ${amount}is sucessfull by card`);
  }
}
class CashPayment extends Payment {
  pay(amount) {
    console.log(`payment of ${amount}is sucessfull by cash`);
  }
}

const upi = new UPIPayment();
const card = new CardPayment();
const cash = new CashPayment();
upi.pay(1000);
card.pay(10000);
cash.pay(2000);
