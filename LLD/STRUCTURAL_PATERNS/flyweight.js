// Flyweight Pattern
// Final Structural Design Pattern
// 1. Concept first
// Definition:

// The Flyweight Pattern is a structural design pattern that reduces memory usage by sharing common data between multiple objects instead of creating separate copies of the same data.

// In simple words:

// If many objects share the same information, store that information once and reuse it.

/**Game Character System
Requirements only · No solution
File: 07-flyweight.js

Build a game character system where multiple characters can share common character data.
Class 1 — CharacterType
Requirements:
- Constructor accepts type, weapon, and health.
- Store these properties.
- Implement display() to print character type, weapon, and health.
Class 2 — Character
Requirements:
- Constructor accepts name, x, y, and characterType.
- Store all properties.
- characterType must reference a shared CharacterType object.
- Implement display() to print the character name, position, and shared character details.
Class 3 — CharacterFactory
Requirements:
- Maintain a collection of reusable character types.
- Implement getCharacterType(type, weapon, health).
- If the requested character type already exists, return the existing object.
- Otherwise, create a new CharacterType, store it, and return it.
Testing requirements
1. Create a CharacterFactory.
2. Get a Warrior character type with Sword and 100 health.
3. Get another Warrior type with Sword and 100 health.
4. Create two characters using these types:
   - Rahul at position (10, 20).
   - Aman at position (50, 60).
5. Display both characters.
6. Check whether both characters share the same CharacterType object using ===.
7. Create a Mage type with Staff and 80 health.
8. Verify that the Mage uses a different CharacterType object. */

class CharacterType {
  constructor(type, weapon, health) {
    this.type = type;
    this.weapon = weapon;
    this.health = health;
  }
  display() {
    console.log(`type:${this.type} ${this.weapon} ${this.health}`);
  }
}

class Character {
  constructor({ name, x, y, characterType }) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.characterType = characterType;
  }
  display() {
    console.log(`name:${this.name} x:${this.x} y:${this.y}}`);
    this.characterType.display();
  }
}

class CharacterFactory {
  constructor() {
    this.characterTypes = new Map();
  }
  getCharacterType(type, weapon, health) {
    if (this.characterTypes.has(type)) {
      return this.characterTypes.get(type);
    }
    const characterType = new CharacterType(type, weapon, health);
    this.characterTypes.set(type, characterType);
    return characterType;
  }
}
const factory = new CharacterFactory();

const warriorType1 = factory.getCharacterType("Warrior", "Sword", 100);

const warriorType2 = factory.getCharacterType("Warrior", "Sword", 100);

const rahul = new Character({
  name: "Rahul",
  x: 10,
  y: 20,
  characterType: warriorType1,
});
const aman = new Character({
  name: "Aman",
  x: 50,
  y: 60,
  characterType: warriorType2,
});

rahul.display();
aman.display();

console.log(
  "Shared CharacterType:",
  rahul.characterType === aman.characterType,
);

const mageType = factory.getCharacterType("Mage", "Staff", 80);

console.log("Different CharacterType:", warriorType1 !== mageType);
