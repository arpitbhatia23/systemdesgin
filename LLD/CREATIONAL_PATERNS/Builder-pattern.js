//

/**
 * Coding Challenge — Computer Builder
File: 04-builder.js
Class 1 — Computer
Requirements:
- Constructor accepts an object containing cpu, ram, storage, and gpu.
- Store all four properties on the object.
- showSpecs() — print all computer specifications.
Class 2 — ComputerBuilder
Requirements:
- Initialize all configuration properties as null.
- setCPU(cpu) — set CPU and return the builder instance.
- setRAM(ram) — set RAM and return the builder instance.
- setStorage(storage) — set storage and return the builder instance.
- setGPU(gpu) — set GPU and return the builder instance.
- build() — return a Computer object using the configured properties.
 */

class Computer {
  constructor({ cpu, ram, storage, gpu }) {
    this.cpu = cpu;
    this.ram = ram;
    this.storage = storage;
    this.gpu = gpu;
  }

  showSpecs() {
    console.log("Computer Specifications:");
    console.log(`CPU: ${this.cpu}`);
    console.log(`RAM: ${this.ram}`);
    console.log(`Storage: ${this.storage}`);
    console.log(`GPU: ${this.gpu}`);
  }
}

class ComputerBuilder {
  constructor() {
    this.cpu = null;
    this.ram = null;
    this.storage = null;
    this.gpu = null;
  }
  setCPU(cpu) {
    this.cpu = cpu;
    return this;
  }
  setRAM(ram) {
    this.ram = ram;
    return this;
  }
  setStorage(storage) {
    this.storage = storage;
    return this;
  }
  setGPU(gpu) {
    this.gpu = gpu;
    return this;
  }
  build() {
    return new Computer({
      cpu: this.cpu,
      gpu: this.gpu,
      ram: this.ram,
      storage: this.storage,
    });
  }
}
const computer = new ComputerBuilder()
  .setCPU("Ryzen 5 5600")
  .setRAM("16GB")
  .setStorage("1TB SSD")
  .setGPU("RTX 4060")
  .build();

computer.showSpecs();
