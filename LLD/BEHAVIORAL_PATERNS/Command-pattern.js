/**Command Pattern
Behavioral Design Pattern
1. Concept first
Definition:

The Command Pattern is a behavioral design pattern that turns a request into a standalone object containing all the information needed to perform an action.

In simple words:

Instead of calling a method directly, create an object that represents the action you want to perform.
2. Real-world example
Think about a TV remote.
- You press the Power button.
- The remote sends a command.
- The TV executes that command.
- The remote doesn't need to know how the TV internally works. */

/**Smart Home Remote
Requirements only · No solution
File: 04-command.js

Build a Smart Home Remote using the Command Pattern.
Class 1 — Light
Requirements:
- Implement turnOn().
- Implement turnOff().
- Print appropriate messages.
Class 2 — TurnOnCommand
Requirements:
- Constructor accepts a Light object.
- Implement execute().
- Execute the light's turnOn() method.
Class 3 — TurnOffCommand
Requirements:
- Constructor accepts a Light object.
- Implement execute().
- Execute the light's turnOff() method.
Class 4 — Remote
Requirements:
- Implement pressButton(command).
- Execute the received command.
- Remote must not directly call Light methods.
Testing requirements
 */

class Light {
  turnOn() {
    console.log("lights on");
  }
  turnOff() {
    console.log("lights off");
  }
}

class TurnOnCommand {
  constructor(light) {
    this.light = light;
  }
  execute() {
    this.light.turnOn();
  }
}
class TurnOffCommand {
  constructor(light) {
    this.light = light;
  }
  execute() {
    this.light.turnOff();
  }
}

class Remote {
  pressButton(command) {
    command.execute();
  }
}
const light = new Light();

const turnOn = new TurnOnCommand(light);
const turnOff = new TurnOffCommand(light);

const remote = new Remote();

remote.pressButton(turnOn);
remote.pressButton(turnOff);
