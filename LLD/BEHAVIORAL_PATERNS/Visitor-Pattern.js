/**Definition:

The Visitor Pattern is a behavioral design pattern that allows you to add new operations to existing objects without modifying their classes.

In simple words:

You have different types of objects, and you want to perform new operations on them without changing their original classes.
2. Real-world example: Shopping Cart
Imagine an e-commerce shopping cart containing:
- A Book
- An Electronics product
- A Clothing product
Now you want to perform different operations:
- Calculate total price.
- Calculate tax.
- Generate an invoice.
Instead of adding all these operations inside every product class, you create separate Visitors. */

/**10-visitor.js

Build a Shopping Cart System using the Visitor Pattern.
Requirements
1. Book class (Concrete Element)
- Constructor accepts name and price.
- accept(visitor) calls visitor.visitBook(this).
2. Electronics class (Concrete Element)
- Constructor accepts name and price.
- accept(visitor) calls visitor.visitElectronics(this).
3. Clothing class (Concrete Element)
- Constructor accepts name and price.
- accept(visitor) calls visitor.visitClothing(this).
4. PriceVisitor class (Concrete Visitor)

Calculate the final price for each product.

Tax requirements:
Product	Tax
Book	5%
Electronics	18%
Clothing	12%

Each visitor method should calculate:
\[
\text{Final Price} = \text{Price} + (\text{Price} \times \text{Tax})
\]

Print the product name and final price.

5. ShoppingCart class (Object Structure)
- Maintain an array of products.
- addProduct(product) — add a product.
- calculateTotal(visitor) — visit every product and calculate its final price.
6. Test example */
class Book {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  accept(Visitors) {
    return Visitors.visitBook(this);
  }
}

class Electronics {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  accept(Visitors) {
    return Visitors.visitElectronics(this);
  }
}

class Clothing {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  accept(Visitors) {
    return Visitors.visitClothing(this);
  }
}

class PriceVisitor {
  visitBook(book) {
    const finalPrice = book.price + book.price * 0.05;

    console.log(`${book.name}: ₹${finalPrice}`);
    return finalPrice;
  }

  visitElectronics(electronics) {
    const finalPrice = electronics.price + electronics.price * 0.18;

    console.log(`${electronics.name}: ₹${finalPrice}`);
    return finalPrice;
  }

  visitClothing(clothing) {
    const finalPrice = clothing.price + clothing.price * 0.12;

    console.log(`${clothing.name}: ₹${finalPrice}`);
    return finalPrice;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
  }
  calculateTotal(visitor) {
    let total = 0;
    console.log(this.products);
    this.products.forEach((product) => {
      const finalPrice = product.accept(visitor);
      total += finalPrice;
    });

    console.log(`Total Shopping Cart Price: ₹${total}`);
    return total;
  }
}

const cart = new ShoppingCart();

cart.addProduct(new Book("JavaScript Book", 500));
cart.addProduct(new Electronics("Laptop", 50000));
cart.addProduct(new Clothing("T-Shirt", 1000));

const priceVisitor = new PriceVisitor();

cart.calculateTotal(priceVisitor);
