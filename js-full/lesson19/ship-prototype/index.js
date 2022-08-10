// export 2 obj vehicle and ship
// vehicle has key name: 'Argo'
// vehicle has method move that logs text with name
// vehicle has method stop that logs text with name

// ship prototype vehicle methods
// ship has method startMachine that logs text with name and calls proto method move
// ship has method stopMachine that calls proto method stop and logs text with name

const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
  __proto__: vehicle
};

ship.stopMachine()
