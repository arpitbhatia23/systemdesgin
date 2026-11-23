// Mini LLD: Parking Lot

// Class 1: Vehicle
// Requirements:
// - Constructor accepts vehicleNumber and vehicleType.
// - Store both properties.
// Class 2: ParkingSpot
// Requirements:
// - Constructor accepts spotNumber.
// - Initialize vehicle as null.
// - isAvailable() — return true if the spot is empty.
// - parkVehicle(vehicle) — park the vehicle if the spot is empty.
// - removeVehicle() — remove the vehicle and make the spot empty again.
// Class 3: ParkingLot
// Requirements:
// - Constructor accepts totalSpots.
// - Create an array of ParkingSpot objects based on totalSpots.
// Methods:
// - parkVehicle(vehicle) — find the first available spot and park the vehicle. If no spot is available, print "Parking Full".
// - removeVehicle(vehicleNumber) — find the spot containing that vehicle number and remove the vehicle.
// - showStatus() — display every spot's number and whether it is occupied or empty.

class Vehicle {
  constructor({ vehicleNumber, vehicleType }) {
    this.vehicleNumber = vehicleNumber;
    this.vehicleType = vehicleType;
  }
}

class ParkingSpot {
  constructor(spotNumber) {
    this.spotNumber = spotNumber;
    this.Vehicle = null;
  }
  isAvailable() {
    return this.Vehicle === null;
  }
  parkVehicle(vehicle) {
    if (!this.isAvailable()) {
      console.log(`this spot number ${this.spotNumber} is already ouccpied`);
      return;
    }
    this.Vehicle = vehicle;
    console.log(` this vehicle is parked on spot number  ${this.spotNumber}`);
  }
  removeVehicle() {
    if (this.isAvailable()) {
      console.log(`this spot number  ${this.spotNumber} empty`);
      return false;
    }
    const removedvehicle = this.Vehicle;
    this.Vehicle = null;
    console.log(
      `this vehicle no ${removedvehicle.vehicleNumber} is removed from spot number ${this.spotNumber}`,
    );
  }
}

class ParkingLot {
  constructor({ totalSpots }) {
    this.spot = [];
    for (let i = 0; i < totalSpots; i++) {
      this.spot.push(new ParkingSpot(i + 1));
    }
  }
  parkVehicle(vehicle) {
    const alreadyparked = this.spot.find(
      (spot) => spot.Vehicle?.vehicleNumber === vehicle.vehicleNumber,
    );
    if (alreadyparked) {
      console.log("car is already park");
      return;
    }
    const availablespot = this.spot.find((spot) => spot.isAvailable());
    if (!availablespot) {
      console.log("parking is full");
      return;
    }
    availablespot.parkVehicle(vehicle);
  }
  removeVehicle(vehicleNumber) {
    const spot = this.spot.find(
      (spot) => spot.Vehicle?.vehicleNumber === vehicleNumber,
    );
    if (!spot) {
      console.log("vehicle not found");
      return;
    }
    spot.removeVehicle();
  }
  showStatus() {
    this.spot.forEach((spot) => {
      console.log(
        `Spot ${spot.spotNumber}: ${spot.isAvailable() ? "Empty" : "Occupied"}`,
      );
    });
  }
}

const bike = new Vehicle({ vehicleNumber: "hpx8778", vehicleType: "bike" });
const car = new Vehicle({ vehicleNumber: "hpx877df8", vehicleType: "car" });
const truck = new Vehicle({ vehicleNumber: "hpx3438", vehicleType: "truck" });
const cucle = new Vehicle({ vehicleNumber: "hpx34ss38", vehicleType: "cycle" });

const parkingLot = new ParkingLot({ totalSpots: 3 });

parkingLot.showStatus();
parkingLot.parkVehicle(car);
parkingLot.parkVehicle(bike);
parkingLot.parkVehicle(truck);
parkingLot.parkVehicle(cucle);
parkingLot.showStatus();
