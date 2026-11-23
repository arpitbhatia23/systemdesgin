// Interface Segregation Principle (ISP)
// A class should not be forced to implement methods it doesn't need.

/*Your coding challenge
Class 1 — CreditCard
Methods:
- pay(amount) → log the amount paid.
- refund(amount) → log the refund amount.
- cashback(amount) → log cashback received.
Class 2 — UPI
Methods:
- pay(amount)
- refund(amount)
Class 3 — Cash
Methods:

- pay(amount) only.
Class 4 — PaymentProcessor
Create a function:
processPayment(paymentMethod, amount)


Requirements:
- It should accept any payment method that supports pay().
- It should call paymentMethod.pay(amount).
- It must not require every payment method to have refund() or cashback().
*/
class Payment {
  process({ method, amount }) {
    method.pay(amount);
  }
}

class UPI {
  pay(amount) {
    console.log(`Processing ₹${amount} through UPI`);
  }
  refund(amount) {
    console.log(`reund ${amount} through upi`);
  }
}
class CARD {
  pay(amount) {
    console.log(`Processing ₹${amount} through card`);
  }
  cashback(amount) {
    console.log(`process cashback ${amount} through card`);
  }
  refund(amount) {
    console.log(`reund ${amount} through card`);
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

const payment = new Payment();
const upi = new UPI();
const card = new CARD();
const cash = new CASH();
const wallet = new WALLET();
payment.process({ method: cash, amount: 1003 });
payment.process({ method: wallet, amount: 1003 });
payment.process({ method: upi, amount: 100 });
payment.process({ method: card, amount: 2000 });
upi.refund(20);
card.cashback(20);
