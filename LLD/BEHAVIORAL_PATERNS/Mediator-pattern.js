/**Mediator Pattern
Behavioral Design Patterns · 8/10
1. Concept
Definition:

The Mediator Pattern is a behavioral design pattern that reduces direct communication between multiple objects by making them communicate through a central mediator object.

In simple words:

Instead of objects communicating directly with each other, they communicate through one central object.
2. Real-world example: Chat Room
Imagine a group chat with three users: Rahul, Aman, and Priya.
- Rahul sends a message.
- Rahul sends it to the ChatRoom.
- ChatRoom forwards it to Aman and Priya.
- Rahul doesn't receive his own message. */

/**Chat Room System
Requirements only · No solution
File: 08-mediator.js

Build a Chat Room System using the Mediator Pattern.

Requirements

1. ChatRoom class (Mediator)
- Maintain an array of users.
- addUser(user) — register a user.
- sendMessage(message, sender) — send the message to all other users.
- The sender must not receive their own message.
2. User class (Colleague)
- Constructor accepts name and chatRoom.
- send(message) — send a message through the ChatRoom.
- receive(message, senderName) — display the received message.
3. Communication rule
- Users must not communicate directly with other users.
- All communication must happen through ChatRoom. */

class ChatRoom {
  constructor() {
    this.user = [];
  }
  addUser(user) {
    this.user.push(user);
  }
  sendMessage(message, sender) {
    this.user.map((user) => {
      if (user !== sender) {
        user.receive(message, sender.name);
      }
    });
  }
}

class User {
  constructor(name, ChatRoom) {
    this.name = name;
    this.ChatRoom = ChatRoom;
  }
  send(message) {
    this.ChatRoom.sendMessage(message, this);
  }
  receive(message, senderName) {
    console.log(`${senderName}: ${message}`);
  }
}

const chatRoom = new ChatRoom();

const rahul = new User("Rahul", chatRoom);
const aman = new User("Aman", chatRoom);
const priya = new User("Priya", chatRoom);

chatRoom.addUser(rahul);
chatRoom.addUser(aman);
chatRoom.addUser(priya);

rahul.send("Hello everyone!");
aman.send("Hi Rahul!");
