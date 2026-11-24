// Mini LLD Project: E-Commerce Order System

/**
 * 1. Project requirements
Build an order system that supports multiple payment methods, product configurations and order creation.
Module 1 — Database Connection
Requirements:
- Maintain only one database connection instance.
- connect() — print connection status.
- getInstance() — return the shared instance.
Module 2 — Payment System
Requirements:
- UPIPayment with pay(amount).
- CardPayment with pay(amount).
- WalletPayment with pay(amount).
A factory should create the correct payment object based on the payment type.

Unsupported payment types should return null.
Module 3 — Notification System
Requirements:
- EmailNotification with send(message).
- SMSNotification with send(message).
Create separate factories for notification families:
- Email factory creates email payment notifications and email order notifications.
- SMS factory creates SMS payment notifications and SMS order notifications.
Each notification must implement send(message).
Module 4 — Product Configuration
Requirements:
- Create a Product class.
- Properties: name, price, color, storage, ram.
- Create a builder that configures these properties step by step.
- build() returns a Product object.
Module 5 — Order Creation
Requirements:
- Create an Order class.
- Properties: orderId, product, paymentMethod, amount.
- Provide a method to display order details.
Create an order template that can be cloned to create similar orders with different order IDs.

2. Expected project flow
E-Commerce System
       |
       |-- Database Connection
       |
       |-- Payment Factory
       |      |-- UPI
       |      |-- Card
       |      |-- Wallet
       |
       |-- Notification Factory
       |      |-- Email
       |      |-- SMS
       |
       |-- Product Builder
       |
       |-- Order Prototype


3. Your rules
1. Use JavaScript classes.
2. Use private properties where appropriate.
3. Keep responsibilities separated.
4. Avoid unnecessary code duplication.
5. Don't put everything inside one class.
6. Test every module.
Important: I haven't labelled which pattern belongs to each module. You need to identify them yourself.
4. Completion criteria
- All modules work independently.
- Modules work together in one order flow.
- Cloned orders don't accidentally modify the original.
- Unsupported payment types are handled safely.
- No unnecessary dependencies between classes.
 */

export class Database {
  static instance = null;
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    Database.instance = this;
    this.connected = false;
  }

  connect() {
    this.connected = true;
    console.log("Database is connected");
  }
  static getinstance() {
    if (!Database.instance) {
      return new Database();
    }
    return Database.instance;
  }
}

export class UPI {
  pay(amount) {
    console.log(`payment of ${amount} is procesed by upi`);
  }
}
export class CARD {
  pay(amount) {
    console.log(`payment of ${amount} is procesed by card`);
  }
}
export class WALLET {
  pay(amount) {
    console.log(`payment of ${amount} is procesed by wallet`);
  }
}

export class PaymentFactory {
  static #methods = {
    upi: UPI,
    card: CARD,
    wallet: WALLET,
  };
  static createPayment(method) {
    const createdPayment = this.#methods[method.toLowerCase()];
    if (!createdPayment) {
      console.log("this payment method is not available");
      return null;
    }
    return new createdPayment();
  }
}

const payment = PaymentFactory.createPayment("upi");

payment.pay(200);

class CreateEmailPaymentNotifications {
  send(message) {
    console.log(`Email Payment: ${message}`);
  }
}

class CreateEmailOrderNotifications {
  send(message) {
    console.log(`Email Order: ${message}`);
  }
}

class CreateSmsPaymentNotifications {
  send(message) {
    console.log(`SMS Payment: ${message}`);
  }
}

class CreateSmsOrderNotifications {
  send(message) {
    console.log(`SMS Order: ${message}`);
  }
}

// Email Factory
class EmailNotification {
  createPaymentNotification() {
    return new CreateEmailPaymentNotifications();
  }

  createOrderNotification() {
    return new CreateEmailOrderNotifications();
  }
}

// SMS Factory
class SMSNotification {
  createPaymentNotification() {
    return new CreateSmsPaymentNotifications();
  }

  createOrderNotification() {
    return new CreateSmsOrderNotifications();
  }
}

// Abstract Factory Selector
class NotificationFactory {
  static #type = {
    email: EmailNotification,
    sms: SMSNotification,
  };

  static createNotifications(type) {
    const Notification = this.#type[type.toLowerCase()];

    if (!Notification) {
      console.log("This type of notification is not available");
      return null;
    }

    return new Notification();
  }
}

class Product {
  constructor({ name, price, color, storage, ram }) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.storage = storage;
    this.ram = ram;
  }
  showSpecs() {
    console.log(`name: ${this.name}`);
    console.log(`price: ${this.price}`);
    console.log(`color: ${this.color}`);
    console.log(`storage: ${this.storage}`);
    console.log(`ram: ${this.ram}`);
  }
}
class ProductBuilder {
  constructor() {
    this.name = null;
    this.price = null;
    this.color = null;
    this.storage = null;
    this.ram = null;
  }
  setName(name) {
    this.name = name;
    return this;
  }
  setPrice(price) {
    this.price = price;
    return this;
  }
  setColor(color) {
    this.color = color;
    return this;
  }
  setStorage(storage) {
    this.storage = storage;
    return this;
  }
  setRam(ram) {
    this.ram = ram;
    return this;
  }
  build() {
    return new Product({
      name: this.name,
      price: this.price,
      color: this.color,
      storage: this.storage,
      ram: this.ram,
    });
  }
}

const product = new ProductBuilder()
  .setName("Laptop")
  .setPrice(50000)
  .setColor("Black")
  .setStorage("512GB SSD")
  .setRam("16GB")
  .build();
product.showSpecs();

class Order {
  constructor({ orderId, product, paymentMethod, amount }) {
    this.orderId = orderId;
    this.product = product;
    this.paymentMethod = paymentMethod;
    this.amount = amount;
  }
  clone() {
    return new Order({
      orderId: this.orderId,
      product: this.product,
      paymentMethod: this.paymentMethod,
      amount: this.amount,
    });
  }
  displayOrder() {
    console.log(`orderId: ${this.orderId}`);
    console.log(`product: ${this.product}`);
    console.log(`paymentMethod: ${this.paymentMethod}`);
    console.log(`amount: ${this.amount}`);
  }
}
export {
  CreateEmailPaymentNotifications,
  CreateEmailOrderNotifications,
  CreateSmsPaymentNotifications,
  CreateSmsOrderNotifications,
  EmailNotification,
  SMSNotification,
  NotificationFactory,
  Product,
  ProductBuilder,
  Order,
};
