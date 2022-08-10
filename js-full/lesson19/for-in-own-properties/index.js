// function need to find object own properties

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
  __proto__: vehicle,
};

const getOwnProps = obj => {
  const newArr = [];
  for (let props in obj) {
    if (obj.hasOwnProperty(props)) {
      if (typeof obj[props] !== "function") {
        newArr.push(props);
      }
    }
  }
  return newArr;
};

console.log(getOwnProps(vehicle));
