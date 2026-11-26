// Chain of Responsibility Pattern
// Behavioral Design Pattern
// 1. Concept first
// Definition:

// The Chain of Responsibility Pattern is a behavioral design pattern that passes a request through a sequence of handlers. Each handler decides whether to process the request or pass it to the next handler.

// In simple words:

// A request moves through multiple objects until one of them handles it.

/**05-chain-of-responsibility.js

Build a customer support system using the Chain of Responsibility Pattern.
Class 1 — SupportHandler
Requirements:
- Implement setNext(handler).
- Store the next handler.
- Return the next handler to allow chaining.
- Implement handle(request).
- If the current handler cannot process the request, pass it to the next handler.
- If no handler exists, print "Request could not be handled".
Class 2 — BasicSupport
Requirements:
- Extend SupportHandler.
- Handle "password" requests.
- Print "Basic Support handled password issue".
- Pass other requests to the next handler.
Class 3 — TechnicalSupport
Requirements:
- Extend SupportHandler.
- Handle "server" requests.
- Print "Technical Support handled server issue".
- Pass other requests to the next handler.
Class 4 — ManagerSupport
Requirements:
- Extend SupportHandler.
- Handle "payment" requests.
- Print "Manager handled payment issue".
- Pass other requests to the next handler.
Testing requirements
Create the chain:
const basic = new BasicSupport();
const technical = new TechnicalSupport();
const manager = new ManagerSupport();

basic.setNext(technical).setNext(manager);


Test these requests:
basic.handle("password");
basic.handle("server");
basic.handle("payment");
basic.handle("network");


Expected output:
Basic Support handled password issue
Technical Support handled server issue
Manager handled payment issue
Request could not be handled */

class SupportHandler {
  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    console.log("Request could not be handled");
  }
}

class BasicSupport extends SupportHandler {
  handle(request) {
    if (request === "password") {
      console.log("Basic Support handled password issue");
      return;
    }

    return super.handle(request);
  }
}

class TechnicalSupport extends SupportHandler {
  handle(request) {
    if (request === "server") {
      console.log("Technical Support handled server issue");
      return;
    }

    return super.handle(request);
  }
}

class ManagerSupport extends SupportHandler {
  handle(request) {
    if (request === "payment") {
      console.log("Manager handled payment issue");
      return;
    }
    return super.handle(request);
  }
}
const basic = new BasicSupport();
const technical = new TechnicalSupport();
const manager = new ManagerSupport();

basic.setNext(technical).setNext(manager);
basic.handle("password");
basic.handle("server");
basic.handle("payment");
basic.handle("network");
