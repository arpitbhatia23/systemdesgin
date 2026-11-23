/**1. Concept first
Prototype Pattern is a creational design pattern that creates new objects by cloning an existing object (prototype), rather than building them from scratch.

In simple words:
You already have a configured object. Instead of creating another one from scratch, copy it and customize the copy. */

/**
 * . Coding Challenge — Game Character Cloning
File: 05-prototype.js
Class 1 — GameCharacter
Requirements:
- Constructor accepts name, health, level, and weapon.
- Store all four properties.
- showStats() — print all character details.
- clone() — return a new GameCharacter with the same properties as the original.
 */

class GameCharacter {
  constructor({ name, health, level, weapon }) {
    this.name = name;
    this.health = health;
    this.level = level;
    this.weapon = weapon;
  }
  clone() {
    return new GameCharacter({
      name: this.name,
      health: this.health,
      level: this.level,
      weapon: this.weapon,
    });
  }
  showStats() {
    console.log(`Name: ${this.name}`);
    console.log(`health: ${this.health}`);
    console.log(`level: ₹${this.level}`);
    console.log(`weapon: ₹${this.weapon}`);
  }
}

const warrior = new GameCharacter({
  name: "Warrior",
  health: 100,
  level: 10,
  weapon: "Sword",
});

const secondWarrior = warrior.clone();

secondWarrior.name = "Warrior Clone";
secondWarrior.weapon = "Axe";

warrior.showStats();
secondWarrior.showStats();
