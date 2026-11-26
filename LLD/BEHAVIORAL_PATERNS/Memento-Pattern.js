/**Definition:

The Memento Pattern is a behavioral design pattern that allows an object to save and restore its previous state without exposing its internal implementation.

In simple words:

It allows you to save a snapshot of an object's state and restore it later.
2. Real-world example: Text Editor
Imagine you're writing a document.
1. You write: Hello.
2. You save a snapshot.
3. You add: World.
4. You make more changes.
5. You press Undo.
6. The document returns to Hello. */

/**09-memento.js

Build a Text Editor Undo System using the Memento Pattern.

Requirements

1. Memento class
- Store the editor's text state.
- Constructor accepts the text.
- Provide a way to retrieve the saved state.
2. TextEditor class (Originator)
- Maintain a text property.
- write(text) — update the current text.
- save() — create and return a Memento containing the current text.
- restore(memento) — restore the text from a saved Memento.
- display() — print the current text.
3. History class (Caretaker)
- Maintain an array of saved Mementos.
- push(memento) — store a snapshot.
- undo() — return the most recently saved snapshot.
- If history is empty, handle it safely. */

class Memento {
  constructor(text) {
    this.text = text;
  }
  getState() {
    return this.text;
  }
}
class TextEditor {
  constructor() {
    this.text = "";
  }
  write(text) {
    this.text = text;
  }
  save() {
    return new Memento(this.text);
  }
  restore(memento) {
    this.text = memento.getState();
  }
  display() {
    console.log(this.text);
  }
}

class History {
  constructor() {
    this.memento = [];
  }
  push(memento) {
    this.memento.push(memento);
  }
  undo() {
    if (this.memento.length === 0) {
      console.log("Nothing to undo!");
      return null;
    }

    return this.memento.pop();
  }
}

const editor = new TextEditor();
const history = new History();

editor.write("Hello");
history.push(editor.save());

editor.write("Hello World");
history.push(editor.save());

editor.write("Hello World!!!");

editor.display();

// Undo
editor.restore(history.undo());
editor.display();

// Undo again
editor.restore(history.undo());
editor.display();
