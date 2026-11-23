// Open/Closed Principle (OCP)
// 1. Concept first
// Software should be open for extension but closed for modification.

// This means when you want to add a new feature, you should be able to extend your existing system without repeatedly modifying the core logic that already works.
// - Open for extension: Add new functionality.
// - Closed for modification: Avoid changing existing, tested code every time a new requirement arrives.
// It doesn't mean code can never be modified. It means your design should minimize unnecessary modifications to existing logic when new behavior is introduced.

/*
Your requirements
Refactor this system using the Open/Closed Principle.
1. Create separate classes for UPI, Card and Cash payments.
2. Each class must have its own pay(amount) method.
3. PaymentProcessor should process a payment without checking if/else for payment types.
4. Adding a new payment type in the future should not require rewriting PaymentProcessor.
5. Test all three payment methods.*/

class Payment {
  process({ method, amount }) {
    method.pay(amount);
  }
}

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

const payment = new Payment();
const upi = new UPI();
const card = new CARD();
const cash = new CASH();
const wallet = new WALLET();
payment.process({ method: cash, amount: 1003 });
payment.process({ method: wallet, amount: 1003 });
payment.process({ method: upi, amount: 100 });
payment.process({ method: card, amount: 2000 });
