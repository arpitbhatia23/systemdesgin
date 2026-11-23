// // Single Responsibility Principle (SRP)
// // 1. Concept
// // A class should have one responsibility and one reason to change.

// // It doesn't mean a class can have only one method. It means its methods should belong to the same responsibility.

// . Coding challenge — Invoice System
// You are given this class:

/*class Invoice {
  constructor({ items, customer }) {
    this.items = items;
    this.customer = customer;
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  saveInvoice() {
    console.log("Invoice saved to database");
  }

  printInvoice() {
    console.log("Printing invoice...");
    console.log("Customer:", this.customer);
    console.log("Total:", this.calculateTotal());
  }
}*/

// Your task
// Refactor this code according to the Single Responsibility Principle.

// Requirements:
// 1. Invoice → stores invoice data and calculates total.
// 2. InvoiceRepository → handles saving invoice.
// 3. InvoicePrinter → handles printing invoice.
// 4. You must keep invoice calculation working.
// 5. Create objects and test all three responsibilities.

class Invoice {
  constructor({ items }) {
    this.items = items;
  }
  calculate() {
    return this.items.reduce((a, b) => a + b.price, 0);
  }
}

class InvoiceRepository {
  save({ invoice }) {
    console.log("invoice is saved");
  }
}

class InvoicePrinter {
  print({ invoice }) {
    console.log(" printing invoice ...");
  }
}

const items = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
];

const invoice = new Invoice({ items });

const repository = new InvoiceRepository();
const printer = new InvoicePrinter();

console.log(invoice.calculate());

repository.save({ invoice });
printer.print({ invoice });
