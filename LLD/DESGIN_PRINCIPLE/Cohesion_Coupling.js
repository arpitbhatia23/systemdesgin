/*Lesson 1 — Cohesion & Coupling: Definitions
1. Cohesion

Cohesion is the degree to which the responsibilities of a class or module are related to each other.

In simple words, a class should focus on tasks that belong together.

High cohesion = related responsibilities grouped together.

2. Coupling

Coupling is the degree of dependency between classes or modules.

In simple words, how much one class depends on another class to work.

Low coupling = classes depend less on each other and can be changed independently.*/

/*Coding Challenge — Notification System
Requirements
Create the following classes.

Class 1 — NotificationMessage
- Constructor accepts message.
- Store the message.
- getMessage() returns the message.
Class 2 — EmailNotification
- Constructor accepts a NotificationMessage.
- Store it.
- send() prints the message with an email notification format.
Class 3 — SMSNotification
- Constructor accepts a NotificationMessage.
- Store it.
- send() prints the message with an SMS notification format.
Class 4 — NotificationService
- Constructor accepts a notification object.
- Store it.
- notify() calls the notification's send() method.*/

class NotificationMessage {
  constructor(message) {
    this.message = message;
  }
  getMessage() {
    return this.message;
  }
}

class SMSNotification {
  constructor(message) {
    this.message = message;
  }
  send() {
    console.log("sms: ", this.message.getMessage());
  }
}
class EmailNotification {
  constructor(message) {
    this.message = message;
  }
  send() {
    console.log("email: ", this.message.getMessage());
  }
}

class NotificationService {
  constructor(service) {
    this.service = service;
  }
  notify() {
    this.service.send();
  }
}
const message = new NotificationMessage("Your order is confirmed!");

const email = new EmailNotification(message);
const sms = new SMSNotification(message);

const service1 = new NotificationService(email);
service1.notify();

const service2 = new NotificationService(sms);
service2.notify();
