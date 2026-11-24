// Bridge Pattern
// 1. Concept first
// Definition:

// The Bridge Pattern is a structural design pattern that separates abstraction from implementation so that both can evolve independently without being tightly coupled.

// In simple words: Instead of combining two different responsibilities into one class, you keep them separate and connect them through composition.
// Real-world analogy — Remote Control and Devices
// Imagine you have:
// - A TV
// - A Radio
// - A remote control
// Both devices can be turned on and off.

/**Coding Challenge — Notification System Bridge
Requirements only · No solution
File: 06-bridge.js

Build a notification system where different notification types can work with different delivery channels.
Class 1 — EmailChannel
Requirements:
- Implement send(message) method.
- Print: Email sent: {message}.
Class 2 — SMSChannel
Requirements:
- Implement send(message) method.
- Print: SMS sent: {message}.
Class 3 — Notification
Requirements:
- Constructor accepts a notification channel.
- Store the channel.
- Implement send(message) method.
- Delegate the message to the channel's send() method.
Class 4 — UrgentNotification
Requirements:
- Extend Notification.
- Override send(message).
- Add the prefix URGENT:  to the message.
- Send the modified message through the stored channel.
Testing requirements
1. Create an EmailChannel object.
2. Create an SMSChannel object.
3. Create a normal Notification using EmailChannel.
4. Create an urgent notification using SMSChannel.
5. Send Your order has been shipped through both notifications.
Expected output: */

class EmailChannel {
  send(message) {
    console.log(`Email sent: ${message}.`);
  }
}
class SMSChannel {
  send(message) {
    console.log(`SMS sent: ${message}.`);
  }
}

class Notification {
  constructor(channel) {
    this.channel = channel;
  }
  send(message) {
    this.channel.send(message);
  }
}

class UrgentNotification extends Notification {
  constructor(channel) {
    super(channel);
  }
  send(message) {
    this.channel.send(`URGENT : ${message}`);
  }
}

// 1. Create delivery channels
const email = new EmailChannel();
const sms = new SMSChannel();

// 2. Normal notification using Email
const normalNotification = new Notification(email);

// 3. Urgent notification using SMS
const urgentNotification = new UrgentNotification(sms);

// 4. Send notifications
normalNotification.send("Your order has been shipped");

urgentNotification.send("Your order has been shipped");
