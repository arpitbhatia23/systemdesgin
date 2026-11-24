/**Facade Pattern
1. Concept first
Definition:

The Facade Pattern is a structural design pattern that provides a simplified interface to a complex system by hiding its internal complexity.

In simple words: Instead of calling multiple classes individually, you create one class that handles all those operations for you.
Real-world analogy — Restaurant
Imagine ordering food at a restaurant.

You don't directly:
- Contact the kitchen.
- Ask the chef to prepare food.
- Contact the billing department.
- Arrange delivery. */

/**Coding Challenge — E-Commerce Order Facade
Requirements only · No solution
File: 03-facade.js

Build an order processing system where one Facade coordinates multiple subsystems.
Class 1 — Inventory
Requirements:
- checkStock(productId) method.
- Print: Stock checked for {productId}.
Class 2 — Payment
Requirements:
- processPayment(amount) method.
- Print: Payment of ₹{amount} processed.
Class 3 — Shipping
Requirements:
- shipOrder(productId) method.
- Print: Order shipped for {productId}.
Class 4 — OrderFacade
Requirements:
- Constructor creates and stores instances of Inventory, Payment, and Shipping.
- Implement placeOrder(productId, amount) method.
- Call the inventory check first.
- Process payment second.
- Ship the order third.
- Print Order completed successfully at the end.
Testing requirements
1. Create an OrderFacade object.
2. Call placeOrder("PROD101", 2000).
3. Verify all operations execute in the correct order. */

class Inventory {
  checkStock(productId) {
    console.log(`stock checked for ${productId}`);
  }
}

class Payment {
  processPayment(amount) {
    console.log(`Payment of ₹${amount} processed`);
  }
}

class Shipping {
  shipOrder(productId) {
    console.log(`Order shipped for ${productId}`);
  }
}

class OrderFacade {
  constructor() {
    this.inventory = new Inventory();
    this.payment = new Payment();
    this.shipping = new Shipping();
  }

  placeOrder(productId, amount) {
    this.inventory.checkStock(productId);
    this.payment.processPayment(amount);
    this.shipping.shipOrder(productId);
    console.log("Order completed successfully");
  }
}

const order = new OrderFacade();
order.placeOrder("122", 12003);
