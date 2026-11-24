/**Decorator Pattern
1. Concept first
Definition:

The Decorator Pattern is a structural design pattern that allows you to add new functionality to an existing object dynamically without modifying its original class.

In simple words:

You wrap an existing object with another object to give it additional features.

Decorator = Add functionality without changing the original class. */

/**
 * Your coding challenge — Notification Decorator
Requirements only — no solution
File: 01-decorator.js

Build a notification system where users can add extra features to a basic notification dynamically.
Class 1 — Notification
Requirements:
- Create a send(message) method.
- Print the message to the console.
Class 2 — EmailDecorator
Requirements:
- Constructor accepts an existing notification object.
- Store that object.
- Implement send(message).
- Call the wrapped notification's send() method.
- Print an additional email notification message.
Class 3 — SMSDecorator
Requirements:
- Constructor accepts an existing notification object.
- Store that object.
- Implement send(message).
- Call the wrapped notification's send() method.
- Print an additional SMS notification message.
Testing requirements
1. Create a basic Notification object.
2. Wrap it with EmailDecorator.
3. Wrap the email notification with SMSDecorator.
4. Call send("Your order has been placed").
5. Test basic notification without decorators.
6. Test email only.
7. Test SMS only.
8. Test email and SMS together.
Expected behavior: One notification object should support additional notification features without modifying the original Notification class.
 */

class Notification {
  send(message) {
    console.log(`Notification: ${message}`);
  }
}

class EmailDecorator {
  constructor(notfication) {
    this.notfication = notfication;
  }
  send(message) {
    this.notfication.send(message);
    console.log(`Email : ${message}`);
  }
}

class SMSDecorator {
  constructor(notfication) {
    this.notfication = notfication;
  }
  send(message) {
    this.notfication.send(message);
    console.log(`SMS : ${message}`);
  }
}

const notfication = new Notification();

const email = new EmailDecorator(notfication);
const sms = new SMSDecorator(email);
sms.send("Your order has been placed");
