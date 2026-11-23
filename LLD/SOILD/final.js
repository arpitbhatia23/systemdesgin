/*Final SOLID Project — Online Food Ordering System 🍔
This is your final OOP + SOLID assessment before moving into bigger LLD projects.

You'll build a small food ordering system using JavaScript. It will test whether you can use classes, encapsulation, composition, and all five SOLID principles without being guided through every step.

You already built a Parking Lot, so this project will use a different domain to test your understanding.
1. Project requirements
Build a food ordering system with the following flow:
Customer
Places order
Order
Calculates total


Payment
Processes payment
Notification
Confirms order


2. Classes you need to build
Class 1 — MenuItem
Represents a food item.

Requirements:
- Constructor accepts name, price, category.
- Store all properties.
- getDetails() returns item details.
Example:
const burger = new MenuItem("Burger", 120, "Fast Food");
const pizza = new MenuItem("Pizza", 250, "Fast Food");
const coke = new MenuItem("Coke", 50, "Drink");


Class 2 — Order
Represents a customer's order.

Requirements:
- Accept an order ID and customer name.
- Store food items in an array.
- addItem(menuItem, quantity)
- removeItem(itemName)
- calculateTotal() — calculate total price.
- showOrder() — display order details.
Example:
const order = new Order("ORD101", "Customer");

order.addItem(burger, 2);
order.addItem(coke, 1);

order.calculateTotal();
order.showOrder();


Expected total: ₹290.

Class 3 — Payment methods
Create separate classes:
Class	Required method
UPIPayment	pay(amount)
CardPayment	pay(amount)
CashPayment	pay(amount)
WalletPayment	pay(amount)

Each class should process payment in its own way and return whether payment was successful.

Class 4 — Notification services
Create:
- EmailNotification
- SMSNotification
Each should have:
send(message)


They should print the notification to the console differently.

Class 5 — Checkout
This is the main class that connects the system.

Requirements:
- Constructor accepts a payment method and notification service.
- checkout(order):
  1. Gets the order total.
  2. Processes the payment.
  3. If successful, sends an order confirmation.
  4. If unsuccessful, displays payment failure.
  5. Returns the appropriate result.

3. SOLID rules you must follow
Don't try to artificially implement a principle. Design the system naturally, but keep these rules in mind.
Principle	What your project should demonstrate
SRP	Order calculations, payments, and notifications are separate responsibilities.
OCP	You can add a new payment method without rewriting Checkout.
LSP	All payment methods can be used interchangeably by Checkout.
ISP	Payment classes don't need to implement refund, cashback, or unrelated methods.
DIP	Checkout receives payment and notification dependencies from outside instead of creating them internally.

4. Final testing scenario
Once you've built everything, test this:
const burger = new MenuItem("Burger", 120, "Food");
const pizza = new MenuItem("Pizza", 250, "Food");
const coke = new MenuItem("Coke", 50, "Drink");

const order = new Order("ORD101", "Rahul");

order.addItem(burger, 2);
order.addItem(pizza, 1);
order.addItem(coke, 2);

order.showOrder();
console.log("Total:", order.calculateTotal());


Expected total: ₹590

Then create checkout with UPI:
const upi = new UPIPayment();
const email = new EmailNotification();

const checkout = new Checkout(upi, email);

checkout.checkout(order);


After that, test the exact same order with Card, Cash and Wallet without modifying the Checkout class.

5. Build order — don't rush
Step 1
MenuItem + Order

Food items, quantities, removing items, totals.
Step 2
Payment classes

UPI, Card, Cash, Wallet.
Step 3
Notification classes

Email and SMS.
Step 4
Checkout

Connect payment, order and notification.
Step 5
Final tests

Test success, failure, different payment methods, and extensions.
Your first task
Start with only MenuItem and Order.

Don't build all the classes at once. Send me your code for those two classes, and I'll review it like an LLD interviewer—logic, class responsibilities, edge cases, and design decisions.

You won't receive the solution upfront. You'll build this yourself. 💪*/

class MenuItem {
  constructor({ name, price, category }) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  getDetails() {
    return { name: this.name, price: this.price, category: this.category };
  }
}
const buger = new MenuItem({
  name: "burger",
  price: 100,
  category: "fastfood",
});

class Order {
  constructor({ orderId, customerName }) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.items = [];
  }
  addItems({ menuItem, quantity }) {
    if (quantity <= 0) {
      console.log("Quantity must be greater than 0");
      return;
    }

    const existingItems = this.items.find(
      (items) => items.menuItem.name === menuItem.name,
    );
    if (!existingItems) {
      this.items.push({ menuItem: { ...menuItem }, quantity: quantity });
    } else {
      console.log(existingItems.quantity);
      existingItems.quantity += quantity;
    }
    console.log(`${menuItem?.name} added successfully`);
  }
  removeItem({ itemName }) {
    const initialLength = this.items.length;
    console.log(this.items);

    this.items = this.items.filter((item) => {
      return item.menuItem.name !== itemName;
    });
    console.log(this.items);

    if (this.items.length < initialLength) {
      console.log(`${itemName} removed successfully`);
    } else {
      console.log(`${itemName} not found`);
    }
  }
  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.menuItem.price * item.quantity,
      0,
    );
  }
}

class OrderPrint {
  showOrder(order) {
    console.log("\n----- ORDER DETAILS -----");
    console.log("Order ID:", order.orderId);
    console.log("Customer:", order.customerName);

    console.log("\nFood Items:");

    order.items.forEach((item) => {
      console.log(
        `${item.menuItem.name} | ₹${item.menuItem.price} x ${item.quantity} = ₹${item.menuItem.price * item.quantity}`,
      );
    });

    console.log("-------------------------");
    console.log("Total: ₹" + order.calculateTotal());
  }
}

const burger = new MenuItem({
  name: "burger",
  price: 100,
  category: "fastfood",
});
const order = new Order({ customerName: "aurpit", orderId: "1" });

order.addItems({ menuItem: buger, quantity: 3 });
order.addItems({ menuItem: buger, quantity: 3 });
const print = new OrderPrint();
print.showOrder(order);

class UPI {
  pay(amount) {
    console.log(`Processing ₹${amount} through UPI`);
    return true;
  }
  refund(amount) {
    console.log(`reund ${amount} through upi`);
  }
}
class CARD {
  pay(amount) {
    console.log(`Processing ₹${amount} through card`);
    return true;
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
    return true;
  }
}
class WALLET {
  pay(amount) {
    console.log(`Processing ₹${amount} through wallet`);
    return true;
  }
}

class EmailService {
  send(name, message) {
    console.log(`send email: ${name} ${message}`);
  }
}
class SMSService {
  send(name, message) {
    console.log(`send sms:${name} ${message}`);
  }
}
class WhatsAppService {
  send(name, message) {
    console.log(`send whatsapp:${name} ${message}`);
  }
}

class Checkout {
  constructor({ Paymentmethod, Notifications }) {
    this.Paymentmethod = Paymentmethod;
    this.Notifications = Notifications;
  }
  checkout(order) {
    const totalamount = order.calculateTotal();

    console.log(`total amount ${totalamount}`);

    if (!this.Paymentmethod.pay(totalamount)) {
      return {
        status: false,
        message: "payment failed",
      };
    }

    this.Notifications.send(
      order.customerName,
      `Your order #${order.orderId} is confirmed. Total: ₹${totalamount}`,
    );
    return {
      success: true,
      message: "Order placed successfully",
      total: totalamount,
    };
  }
}

const upi = new UPI();
const notification = new EmailService();
const checkout = new Checkout({
  Paymentmethod: upi,
  Notifications: notification,
});

checkout.checkout(order);
