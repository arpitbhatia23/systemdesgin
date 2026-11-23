// Composition means building a class by combining other objects that provide specific functionality.

// Inheritance	                      Composition
// extends	Pass objects into          / store objects
// IS-A relationship	                 HAS-A relationship
// Reuses parent class	                Reuses another object's functionality
// Car is a Vehicle	                   Car has an Engine
// Employee is a Person	                Computer has a CPU

// 5. Coding challenge — Car System
// Your task: Implement Composition using JavaScript classes.
// Requirements
// 1. Create an Engine class
// - Create a start() method.
// - Create a stop() method.
// 2. Create a MusicPlayer class
// - Create a play() method.
// - Create a stop() method.
// 3. Create a Car class
// - It should receive an Engine object and a MusicPlayer object through its constructor.
// - Store both objects inside the car.
// - Create startCar() that starts the engine.
// - Create playMusic() that uses the music player.
// - Create stopCar() that stops the engine.

class Engine {
  start() {
    console.log("engine start");
  }
  stop() {
    console.log("engine stop");
  }
}
class MusicPlayer {
  play() {
    console.log("music is playing");
  }
  stop() {
    console.log("music is stop");
  }
}

class Car {
  #engine;
  #musicPlayer;
  constructor(engine, musicPlayer) {
    this.#engine = engine;
    this.#musicPlayer = musicPlayer;
  }
  startCar() {
    this.#engine.start();
  }
  playMusic() {
    this.#musicPlayer.play();
  }
  stopCar() {
    this.#engine.stop();
  }
}

const engine = new Engine();
const musicPlayer = new MusicPlayer();
const car = new Car(engine, musicPlayer);

car.startCar();
car.playMusic();
car.stopCar();
