/*Dependency Inversion Principle (DIP)
SOLID · Principle 5 of 5
1. Concept first
Definition:
High-level modules should not depend directly on low-level modules. Both should depend on abstractions.

In simple words, your main logic shouldn't be tightly connected to one specific implementation.*/

/*2. Coding challenge — Notification System
Build this in JavaScript without looking for the solution.

Class 1: EmailService
- Create a send(message) method.
- Print Email sent: message.
Class 2: SMSService
- Create a send(message) method.
- Print SMS sent: message.
Class 3: WhatsAppService
- Create a send(message) method.
- Print WhatsApp sent: message.
Class 4: Notification
- Constructor accepts a service object.
- Store it inside the instance.
- notify(message) calls the injected service's send(message) method.*/

class Notifications {
  constructor({ service }) {
    this.service = service;
  }
  notify(message) {
    this.service.send(message);
  }
}

class EmailService {
  send(message) {
    console.log(`send email:${message}`);
  }
}
class SMSService {
  send(message) {
    console.log(`send ssm:${message}`);
  }
}
class WhatsAppService {
  send(message) {
    console.log(`send whatsapp:${message}`);
  }
}

const email = new EmailService();
const sms = new SMSService();
const whatsapp = new WhatsAppService();

const notification = new Notifications({ service: email });

notification.notify("fuck you");
