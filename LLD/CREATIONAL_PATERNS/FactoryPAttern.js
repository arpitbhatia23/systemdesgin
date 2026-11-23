/*
Factory Method is a creational design pattern that provides a method for creating objects while allowing subclasses or separate creator logic to determine which concrete object gets created.

In simple words, instead of creating objects directly everywhere using new, you delegate object creation to a factory.

Factory Method = Delegate object creation.
*/

/*
Coding Challenge — Payment Factory
File: 02-factory-method.js
Requirements
Class 1 — UPIPayment

- pay(amount) prints UPI payment details.

Class 2 — CardPayment

- pay(amount) prints card payment details.

Class 3 — WalletPayment

- pay(amount) prints wallet payment details.

Class 4 — PaymentFactory

- static createPayment(type):
- If type is "UPI", return a UPIPayment object.
- If type is "CARD", return a CardPayment object.
- If type is "WALLET", return a WalletPayment object.
- If type is unsupported, return null.*/

class UPI {
  pay(amount) {
    console.log(`Processing ₹${amount} through UPI`);
  }
}
class CARD {
  pay(amount) {
    console.log(`Processing ₹${amount} through card`);
  }
}
class CASH {
  pay(amount) {
    console.log(`Processing ₹${amount} through cash`);
  }
}
class WALLET {
  pay(amount) {
    console.log(`Processing ₹${amount} through wallet`);
  }
}

class PaymentFactory {
  static #methods = {
    upi: UPI,
    card: CARD,
    cash: CASH,
    wallet: WALLET,
  };
  static createPayment(method) {
    const paymentMethod = this.#methods[method.toLowerCase()];
    if (!paymentMethod) {
      console.log("payment Method not availabe");
      return null;
    }
    return new paymentMethod();
  }
}
const payment1 = PaymentFactory.createPayment("UPI");
const payment2 = PaymentFactory.createPayment("CARD");
const payment3 = PaymentFactory.createPayment("WALLET");
const payment4 = PaymentFactory.createPayment("dd");

payment1.pay(500);
payment2.pay(1000);
payment3.pay(250);
