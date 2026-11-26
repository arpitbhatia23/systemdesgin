/**Concept first
Definition:

The Observer Pattern is a behavioral design pattern where one object (Subject) maintains a list of dependent objects (Observers) and automatically notifies them whenever its state changes.

In simple words:

When one object changes, all objects listening to it get notified automatically. */

/**Stock Price Notification System
Requirements only · No solution
File: 02-observer.js

Build a stock price notification system where multiple investors receive updates whenever a stock price changes.
Class 1 — Stock
Requirements:
- Constructor accepts a stock name and initial price.
- Store the stock name and price.
- Maintain a collection of investors.
- Implement subscribe(investor) to add an investor.
- Implement unsubscribe(investor) to remove an investor.
- Implement setPrice(newPrice) to update the stock price.
- Whenever the price changes, notify all subscribed investors.
Class 2 — Investor
Requirements:
- Constructor accepts an investor name.
- Store the investor name.
- Implement update(stockName, newPrice).
- Print the stock name and updated price received.
Testing requirements
1. Create a Stock named TCS with an initial price of ₹3500.
2. Create three investors:
   - Rahul
   - Aman
   - Priya
3. Subscribe all three investors.
4. Change the stock price to ₹3600.
5. Unsubscribe Aman.
6. Change the stock price to ₹3700.
Expected output */

class Stock {
  constructor({ stockName, initialPrice }) {
    this.stockName = stockName;
    this.initialPrice = initialPrice;
    this.investors = [];
  }
  subscribe(investor) {
    this.investors.push(investor);
  }
  unsubscribe(investor) {
    this.investors = this.investors.filter(
      (data) => data.name !== investor.name,
    );
  }
  setPrice(price) {
    this.initialPrice = price;
    this.notify();
  }
  notify() {
    this.investors.forEach((investor) => {
      investor.update(this.stockName, this.initialPrice);
    });
  }
}

class Investor {
  constructor(name) {
    this.name = name;
  }
  update(stockName, newPrice) {
    console.log(
      `${this.name.toUpperCase()} received ${stockName} price updated ${newPrice} .`,
    );
  }
}

// 1. Create stock
const stock = new Stock({ stockName: "TCS", initialPrice: 3500 });

// 2. Create investors
const rahul = new Investor("Rahul");
const aman = new Investor("Aman");
const priya = new Investor("Priya");

// 3. Subscribe investors
stock.subscribe(rahul);
stock.subscribe(aman);
stock.subscribe(priya);

// 4. Update stock price
stock.setPrice(3600);

// 5. Unsubscribe Aman
stock.unsubscribe(aman);

// 6. Update price again
stock.setPrice(3700);
