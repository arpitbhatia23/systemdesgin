/**Concept first
Definition:

The Template Method Pattern is a behavioral design pattern that defines the skeleton of an algorithm in a parent class while allowing subclasses to override specific steps without changing the overall algorithm structure.

In simple words:

The parent class decides the order of steps. Child classes customize how some of those steps work. */

/**Data Processing System
Requirements only · No solution
File: 06-template-method.js

Build a Data Processing System using the Template Method Pattern.
Class 1 — DataProcessor
Requirements:
- Implement process().
- The process() method must execute these steps in order:
  1. readData()
  2. cleanData()
  3. transformData()
  4. saveData()
- Implement readData() to print "Reading data".
- Implement saveData() to print "Saving data".
- Leave cleanData() and transformData() for subclasses to implement.
Class 2 — CSVProcessor
Requirements:
- Extend DataProcessor.
- Implement cleanData().
- Print "Cleaning CSV data".
- Implement transformData().
- Print "Transforming CSV data".
Class 3 — JSONProcessor
Requirements:
- Extend DataProcessor.
- Implement cleanData().
- Print "Cleaning JSON data".
- Implement transformData().
- Print "Transforming JSON data". */

class DataProcessor {
  process() {
    this.readData();
    this.cleanData();
    this.transformData();
    this.saveData();
  }
  readData() {
    console.log("reading data");
  }
  cleanData() {
    console.log("cleaning data");
  }
  transformData() {
    console.log("tranforming  data");
  }
  saveData() {
    console.log("saving  data");
  }
}

class CSVProcessor extends DataProcessor {
  cleanData() {
    console.log("cleaning csv data");
  }
  transformData() {
    console.log("transfroming  csv data");
  }
}

class JSONProcessor extends DataProcessor {
  cleanData() {
    console.log("cleaning json data");
  }
  transformData() {
    console.log("transforming json data");
  }
}

const csv = new CSVProcessor();
csv.process();

console.log("----------");

const json = new JSONProcessor();
json.process();
