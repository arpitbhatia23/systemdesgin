/**: Strategy Pattern
New section started
1. Concept first
Definition:

The Strategy Pattern is a behavioral design pattern that defines a family of algorithms, encapsulates each one separately, and makes them interchangeable at runtime.

In simple words:

Instead of writing multiple conditions inside one class to decide how something works, create separate classes for different behaviors and switch between them when needed. */

/**Coding Challenge — Shipping Cost Calculator
Requirements only · No solution
File: 01-strategy.js

Build a shipping calculator using the Strategy Pattern.
Class 1 — StandardShipping
Requirements:
- Implement calculateCost(weight).
- Shipping cost = weight × ₹10.
- Return the calculated cost.
Class 2 — ExpressShipping
Requirements:
- Implement calculateCost(weight).
- Shipping cost = weight × ₹20.
- Return the calculated cost.
Class 3 — InternationalShipping
Requirements:
- Implement calculateCost(weight).
- Shipping cost = weight × ₹50.
- Return the calculated cost.
Class 4 — ShippingContext
Requirements:
- Constructor accepts a shipping strategy.
- Store the strategy.
- Implement setStrategy(strategy) to change the shipping method.
- Implement calculate(weight) to delegate calculation to the current strategy.
Testing requirements
1. Create a ShippingContext using StandardShipping.
2. Calculate shipping for 5 kg.
3. Switch to ExpressShipping.
4. Calculate shipping for 5 kg.
5. Switch to InternationalShipping.
6. Calculate shipping for 5 kg. */
class StandardShipping {
  calculateCost(weight) {
    return weight * 10;
  }
}
class ExpressShipping {
  calculateCost(weight) {
    return weight * 20;
  }
}
class InternationalShipping {
  calculateCost(weight) {
    return weight * 50;
  }
}

class ShippingContext {
  constructor(strategy) {
    this.strategy = strategy;
  }
  calculate(weight) {
    return this.strategy.calculateCost(weight);
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
}
// 1. Standard Shipping
const shipping = new ShippingContext(new StandardShipping());

console.log(`Standard Shipping: ₹${shipping.calculate(5)}`);

// 2. Express Shipping
shipping.setStrategy(new ExpressShipping());

console.log(`Express Shipping: ₹${shipping.calculate(5)}`);

// 3. International Shipping
shipping.setStrategy(new InternationalShipping());

console.log(`International Shipping: ₹${shipping.calculate(5)}`);
