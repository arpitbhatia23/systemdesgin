// Inheritance is a mechanism that allows one class to acquire properties
//  and methods from another class, while also adding or modifying its own functionality.

// Coding challenge — Employee Management System
// Your task: Practice inheritance using JavaScript classes.
// Requirements
// 1. Create a parent class Employee
// - Store name.
// - Store salary.
// - Create a getDetails() method that prints employee information.
// - Create a work() method that prints a general working message.
// 2. Create a child class Developer
// - Inherit from Employee.
// - Add a language property.
// - Add a writeCode() method.
// - Override the parent's work() method to print a developer-specific working message.
// 3. Create a child class Designer
// - Inherit from Employee.
// - Add a tool property (e.g., Figma).
// - Add a design() method.
// - Override the parent's work() method with a designer-specific working message.

class Employee {
  constructor({ name, salary }) {
    this.name = name;
    this.salary = salary;
  }
  work() {
    console.log("employee is working");
  }
  getdetails() {
    console.log(`name:${this.name} salary:${this.salary}`);
  }
}

class Developer extends Employee {
  constructor({ name, salary, language }) {
    super({ name, salary });
    this.language = language;
  }
  writingCode() {
    console.log("writing code");
  }
  work() {
    console.log(` developer writer code in ${this.language}`);
  }
}

class Designer extends Employee {
  constructor({ name, salary, tool }) {
    super({ name, salary });
    this.tool = tool;
  }
  work() {
    console.log("desginer make desgins");
  }
  desgin() {
    console.log(`desginer desging ui with ${this.tool}`);
  }
}

const dev = new Developer({ name: "aurpit", salary: 30000, language: "js" });
const desginer = new Designer({
  name: "tamanna",
  salary: 30000,
  tool: "figma",
});

console.log(dev.name);
dev.work();
dev.getdetails();
dev.writingCode();
console.log(desginer.name);
desginer.work();
desginer.getdetails();
desginer.desgin();
