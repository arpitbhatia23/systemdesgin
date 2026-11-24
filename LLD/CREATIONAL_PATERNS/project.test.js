import assert from "node:assert";
import {
  Database,
  UPI,
  PaymentFactory,
  CARD,
  NotificationFactory,
  EmailNotification,
  SMSNotification,
  CreateEmailPaymentNotifications,
  CreateEmailOrderNotifications,
  CreateSmsPaymentNotifications,
  CreateSmsOrderNotifications,
  ProductBuilder,
  Product,
  Order,
} from "./project.js";

// Console colors
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  bold: "\x1b[1m",
};

function test(id, description, callback) {
  try {
    callback();

    console.log(`${colors.green}✔ ${id} PASSED${colors.reset} ${description}`);
  } catch (error) {
    console.log(`${colors.red}✘ ${id} FAILED${colors.reset} ${description}`);

    console.log(`${colors.yellow}${error.message}${colors.reset}`);

    process.exitCode = 1;
  }
}

function captureConsole(callback) {
  const output = [];
  const originalLog = console.log;

  console.log = (...args) => {
    output.push(args.join(" "));
  };

  try {
    callback();
  } finally {
    console.log = originalLog;
  }

  return output.join("\n");
}

console.log(
  `\n${colors.bold}${colors.cyan}SINGLETON PATTERN TESTS${colors.reset}\n`,
);

let db1;
let db2;
let db3;

// DB-01: Create first connection
test("DB-01", "Create first connection", () => {
  db1 = Database.getinstance();

  assert.ok(db1 instanceof Database);
});

// DB-02: Call getInstance() twice
test("DB-02", "Both references point to same object", () => {
  db2 = Database.getinstance();

  assert.strictEqual(db1, db2);
});

// DB-03: Call connect()
test("DB-03", "Connection status verified", () => {
  db1.connect();

  assert.strictEqual(db1.connected, true);
});

// DB-04: Create another connection
test("DB-04", "No separate instance created", () => {
  db3 = new Database();

  assert.strictEqual(db1, db3);
});

console.log(
  `\n${colors.bold}${colors.cyan}TEST EXECUTION COMPLETED${colors.reset}\n`,
);

test("pay 01", "upi return UPIPayment object", () => {
  const payment = PaymentFactory.createPayment("upi");
  assert.ok(payment instanceof UPI);
});

test("pay 02", "card return CARDPayment object", () => {
  const payment = PaymentFactory.createPayment("card");
  assert.ok(payment instanceof CARD);
});
test("pay 03", "wallet return WALLETPayment object", () => {
  const payment = PaymentFactory.createPayment("card");
  assert.ok(payment instanceof CARD);
});

test("pay 04", "crypto return null", () => {
  const payment = PaymentFactory.createPayment("crypto");
  assert.strictEqual(payment, null);
});

test("pay 06", "upi payment 500 details print", () => {
  const payment = PaymentFactory.createPayment("upi");
  const output = captureConsole(() => payment.pay(500));
  assert.strictEqual(output, "payment of 500 is procesed by upi");
});
test("pay 07", "card payment 500 details print", () => {
  const payment = PaymentFactory.createPayment("card");
  const output = captureConsole(() => payment.pay(500));
  assert.strictEqual(output, "payment of 500 is procesed by card");
});
test("pay 08", "wallet payment 500 details print", () => {
  const payment = PaymentFactory.createPayment("wallet");
  const output = captureConsole(() => payment.pay(500));
  assert.strictEqual(output, "payment of 500 is procesed by wallet");
});

test("NOT-01", "Create Email factory", () => {
  const factory = NotificationFactory.createNotifications("EMAIL");

  assert.ok(factory instanceof EmailNotification);
});

// NOT-02: Create SMS factory
test("NOT-02", "Create SMS factory", () => {
  const factory = NotificationFactory.createNotifications("SMS");

  assert.ok(factory instanceof SMSNotification);
});

// NOT-03: Email payment notification
test("NOT-03", "Email payment message printed", () => {
  const factory = NotificationFactory.createNotifications("EMAIL");

  const notification = factory.createPaymentNotification();

  assert.ok(notification instanceof CreateEmailPaymentNotifications);

  const output = captureConsole(() => {
    notification.send("Payment successful");
  });

  assert.strictEqual(output, "Email Payment: Payment successful");
});

// NOT-04: Email order notification
test("NOT-04", "Email order message printed", () => {
  const factory = NotificationFactory.createNotifications("EMAIL");

  const notification = factory.createOrderNotification();

  assert.ok(notification instanceof CreateEmailOrderNotifications);

  const output = captureConsole(() => {
    notification.send("Order confirmed");
  });

  assert.strictEqual(output, "Email Order: Order confirmed");
});

// NOT-05: SMS payment notification
test("NOT-05", "SMS payment message printed", () => {
  const factory = NotificationFactory.createNotifications("SMS");

  const notification = factory.createPaymentNotification();

  assert.ok(notification instanceof CreateSmsPaymentNotifications);

  const output = captureConsole(() => {
    notification.send("Payment successful");
  });

  assert.strictEqual(output, "SMS Payment: Payment successful");
});

// NOT-06: SMS order notification
test("NOT-06", "SMS order message printed", () => {
  const factory = NotificationFactory.createNotifications("SMS");

  const notification = factory.createOrderNotification();

  assert.ok(notification instanceof CreateSmsOrderNotifications);

  const output = captureConsole(() => {
    notification.send("Order confirmed");
  });

  assert.strictEqual(output, "SMS Order: Order confirmed");
});

test(
  "PROD-01",
  "Set all product properties - All properties stored correctly",
  () => {
    const product = new ProductBuilder()
      .setName("Laptop")
      .setPrice(50000)
      .setColor("Black")
      .setStorage("512GB SSD")
      .setRam("16GB")
      .build();

    assert.strictEqual(product.name, "Laptop");
    assert.strictEqual(product.price, 50000);
    assert.strictEqual(product.color, "Black");
    assert.strictEqual(product.storage, "512GB SSD");
    assert.strictEqual(product.ram, "16GB");
  },
);

// PROD-02: Build product
test("PROD-02", "Build product - Product instance returned", () => {
  const product = new ProductBuilder()
    .setName("Laptop")
    .setPrice(50000)
    .build();

  assert.ok(product instanceof Product);
});

// PROD-03: Skip optional color
test("PROD-03", "Skip optional color - Color remains null", () => {
  const product = new ProductBuilder()
    .setName("Laptop")
    .setPrice(50000)
    .setStorage("512GB SSD")
    .setRam("16GB")
    .build();

  assert.strictEqual(product.color, null);
});

// PROD-04: Build two different products
test(
  "PROD-04",
  "Build two different products - Each has its own configuration",
  () => {
    const product1 = new ProductBuilder()
      .setName("Laptop")
      .setPrice(50000)
      .setColor("Black")
      .setStorage("512GB SSD")
      .setRam("16GB")
      .build();

    const product2 = new ProductBuilder()
      .setName("Desktop")
      .setPrice(80000)
      .setColor("White")
      .setStorage("1TB SSD")
      .setRam("32GB")
      .build();

    assert.notStrictEqual(product1, product2);

    assert.strictEqual(product1.name, "Laptop");
    assert.strictEqual(product1.ram, "16GB");

    assert.strictEqual(product2.name, "Desktop");
    assert.strictEqual(product2.ram, "32GB");
  },
);

// PROD-05: Change builder after first build
test(
  "PROD-05",
  "Change builder after first build - Previously built product remains unchanged",
  () => {
    const builder = new ProductBuilder();

    const product1 = builder
      .setName("Laptop")
      .setPrice(50000)
      .setColor("Black")
      .setStorage("512GB SSD")
      .setRam("16GB")
      .build();

    builder
      .setName("Desktop")
      .setPrice(80000)
      .setColor("White")
      .setStorage("1TB SSD")
      .setRam("32GB");

    const product2 = builder.build();

    assert.strictEqual(product1.name, "Laptop");
    assert.strictEqual(product1.price, 50000);
    assert.strictEqual(product1.color, "Black");
    assert.strictEqual(product1.ram, "16GB");

    assert.strictEqual(product2.name, "Desktop");
    assert.strictEqual(product2.price, 80000);
    assert.strictEqual(product2.color, "White");
    assert.strictEqual(product2.ram, "32GB");
  },
);

// PROD-06: Show product specifications
test(
  "PROD-06",
  "Show product specifications - All specifications printed",
  () => {
    const product = new ProductBuilder()
      .setName("Laptop")
      .setPrice(50000)
      .setColor("Black")
      .setStorage("512GB SSD")
      .setRam("16GB")
      .build();

    const output = captureConsole(() => product.showSpecs());
    const expected = [
      "name: Laptop",
      "price: 50000",
      "color: Black",
      "storage: 512GB SSD",
      "ram: 16GB",
    ].join("\n");
    assert.strictEqual(output, expected);
  },
);
const orderData = {
  orderId: "ORD101",
  product: "Laptop",
  paymentMethod: "UPI",
  amount: 50000,
};

test("ORD-01", "Create an order - Order object returned", () => {
  const order = new Order(orderData);

  assert.ok(order instanceof Order);
  assert.strictEqual(order.orderId, "ORD101");
  assert.strictEqual(order.product, "Laptop");
  assert.strictEqual(order.paymentMethod, "UPI");
  assert.strictEqual(order.amount, 50000);
});

// ORD-02: Display order details
test("ORD-02", "Display order details - All four properties printed", () => {
  const order = new Order(orderData);

  const output = captureConsole(() => {
    order.displayOrder();
  });

  const expected = [
    "orderId: ORD101",
    "product: Laptop",
    "paymentMethod: UPI",
    "amount: 50000",
  ].join("\n");

  assert.strictEqual(output, expected);
});

// ORD-03: Clone existing order
test(
  "ORD-03",
  "Clone existing order - New order with same initial data",
  () => {
    const original = new Order(orderData);
    const clone = original.clone();

    assert.ok(clone instanceof Order);
    assert.notStrictEqual(clone, original);

    assert.deepStrictEqual(
      {
        orderId: clone.orderId,
        product: clone.product,
        paymentMethod: clone.paymentMethod,
        amount: clone.amount,
      },
      orderData,
    );
  },
);

// ORD-04: Change clone's order ID
test("ORD-04", "Change clone order ID - Original order ID unchanged", () => {
  const original = new Order(orderData);
  const clone = original.clone();

  clone.orderId = "ORD202";

  assert.strictEqual(clone.orderId, "ORD202");
  assert.strictEqual(original.orderId, "ORD101");
});

// ORD-05: Change clone's product
test("ORD-05", "Change clone product - Original product unaffected", () => {
  const original = new Order(orderData);
  const clone = original.clone();

  clone.product = "Mobile";

  assert.strictEqual(clone.product, "Mobile");
  assert.strictEqual(original.product, "Laptop");
});

// ORD-06: Create multiple clones
test("ORD-06", "Create multiple clones - Each clone is independent", () => {
  const original = new Order(orderData);

  const clone1 = original.clone();
  const clone2 = original.clone();
  const clone3 = original.clone();

  clone1.orderId = "ORD201";
  clone2.orderId = "ORD202";
  clone3.orderId = "ORD203";

  clone1.product = "Laptop";
  clone2.product = "Mobile";
  clone3.product = "Tablet";

  assert.notStrictEqual(clone1, clone2);
  assert.notStrictEqual(clone2, clone3);
  assert.notStrictEqual(clone1, clone3);

  assert.strictEqual(clone1.orderId, "ORD201");
  assert.strictEqual(clone2.orderId, "ORD202");
  assert.strictEqual(clone3.orderId, "ORD203");

  assert.strictEqual(clone1.product, "Laptop");
  assert.strictEqual(clone2.product, "Mobile");
  assert.strictEqual(clone3.product, "Tablet");

  assert.strictEqual(original.orderId, "ORD101");
  assert.strictEqual(original.product, "Laptop");
});
console.log(
  `\n${colors.bold}${colors.cyan}TEST EXECUTION COMPLETED${colors.reset}\n`,
);
