/*1. DRY — Don't Repeat Yourself
Definition: Avoid duplicating the same logic or knowledge in multiple places. Instead, reuse it where appropriate.

In simple words, don't copy-paste the same code again and again; create reusable logic.

DRY = Reduce duplication.
2. KISS — Keep It Simple, Stupid
Definition: Design and implement systems as simply as possible without unnecessary complexity.

In simple words, don't make simple problems complicated by adding unnecessary classes, logic, or patterns.

KISS = Prefer simple solutions.
3. YAGNI — You Aren't Gonna Need It
Definition: Don't implement functionality until it is actually needed.

In simple words, don't build features today just because you think you might need them in the future.

YAGNI = Don't build unnecessary future features.*/

/*
Coding Challenge — Logger System
Requirements
Class 1 — Logger
- Constructor accepts appName.
- Store appName.
- log(message) prints the app name and message.
- error(message) prints the app name and error message.
Class 2 — UserService
- Constructor accepts a Logger object.
- Store the logger.
- createUser(name):
  - Print a log that the user is being created.
  - Print a log that the user was created successfully.
Class 3 — PaymentService
- Constructor accepts a Logger object.
- Store the logger.
- processPayment(amount):
  - Print a log that payment is being processed.
  - Print a log that payment was successful.
  */

class Logger {
  constructor(appName) {
    this.appName = appName;
  }
  log(message) {
    console.log(`${[this.appName]} ${message}`);
  }
  error(message) {
    console.error(`${[this.appName]} ${message}`);
  }
}

class UserService {
  constructor(logger) {
    this.logger = logger;
  }
  createUser(name) {
    this.logger.log(`User ${name} is being created.`);
    this.logger.log(`User ${name} created successfully.`);
  }
}
class PaymentService {
  constructor(logger) {
    this.logger = logger;
  }
  processPayment(amount) {
    this.logger.log(` payment of ${amount} is being processed.`);
    this.logger.log(` payment was successful.`);
  }
}

const logger = new Logger("MyApp");

const userService = new UserService(logger);
userService.createUser("Rahul");

const paymentService = new PaymentService(logger);
paymentService.processPayment(500);
