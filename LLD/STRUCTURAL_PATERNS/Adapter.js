/**Adapter Pattern
1. Concept first
Definition:

The Adapter Pattern is a structural design pattern that allows two incompatible interfaces to work together by converting one interface into another that the client expects.

In simple words: An adapter acts as a translator between two objects that use different methods.

Real-world analogy:

A laptop charger has a different plug from the wall socket. A plug adapter connects them without changing the charger or the socket. */

/**
 * Coding Challenge — Payment Gateway Adapter
Requirements only · No solution
File: 02-adapter.js

Build a payment adapter that connects a modern checkout system to an old payment gateway.
Class 1 — ModernCheckout
Requirements:
- processPayment(payment, amount) method.
- Accept a payment object and amount.
- Call payment.pay(amount).
Class 2 — OldPaymentGateway
Requirements:
- makePayment(amount) method.
- Print: Payment of ₹{amount} processed through old gateway.
Class 3 — PaymentAdapter
Requirements:
- Constructor accepts an OldPaymentGateway object.
- Store the old gateway object.
- Implement a pay(amount) method.
- Internally call the old gateway's makePayment(amount) method.
Testing requirements
1. Create an OldPaymentGateway object.
2. Pass it into PaymentAdapter.
3. Create a ModernCheckout object.
4. Process a payment of ₹1,000 using the adapter.
5. Verify that the old gateway processes the payment.
Expected output:
 */

class ModernCheckout {
  processPayment(paymentMethod, amount) {
    paymentMethod.pay(amount);
  }
}

class OldPaymentGateway {
  makePayment(amount) {
    console.log(`Payment of ₹${amount} processed through old gateway.`);
  }
}
class PaymentAdapter {
  constructor(oldmethod) {
    this.oldmethod = oldmethod;
  }
  pay(amount) {
    this.oldmethod.makePayment(amount);
  }
}

const checkout = new ModernCheckout();
const legacy = new OldPaymentGateway();
const adapter = new PaymentAdapter(legacy);

adapter.pay(100);

checkout.processPayment(adapter, 2000);
