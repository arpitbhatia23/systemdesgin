/*
Singleton Pattern
1. Definition
Singleton is a creational design pattern that ensures a class has only one instance and provides a shared access point to that instance.

In simple words, no matter how many times you request the object, you get the same instance instead of creating new ones.

Singleton = One shared instance.*/

/*
Requirements
Class 1 — Database
- Constructor initializes connection with "Connected" only when a new instance is created.
- Store a static instance property to keep the single instance.
- static getInstance():
  - If no instance exists, create one.
  - If an instance already exists, return that existing instance.
- getStatus() returns the connection status.
*/

class Database {
  static instance = null;
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.status = "connected";
    Database.instance = this;
    console.log(`db contection created`);
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
  getStatus() {
    return this.status;
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();
const db3 = Database.getInstance();

console.log(db1.getStatus());

console.log(db1 === db2);
console.log(db2 === db3);
console.log(db1 === db3);
