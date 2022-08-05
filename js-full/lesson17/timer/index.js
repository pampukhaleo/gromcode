// Learn requirement
// Create step by step algorithm. Input Output
// Write draft solution & do testing
// Refactoring & final testing

// create object values increase for 1 every sec and has past minutes
// export object timer
// has secondsPassed and minsPassed
// method startTimer adds 1 to secondsPassed every second
// to start timer use method setInterval
// when secondsPassed = 60 it resets and adds 1 to minsPassed. loop goes from start
// method getTime return timer state in 1:05 format. adds 0 if it less than 10
// method stopTimer stops timer and saves result. if use start timer it starts from saved result
// method clearInterval stops timer
// method resetTimer resets timer to start

let intervalId;

export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
    intervalId = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  stopTimer() {
    clearInterval(intervalId);
  },
  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

timer.startTimer();
setTimeout(() => console.log(timer.getTime()), 3000);
setTimeout(() => timer.stopTimer(), 5000);
setTimeout(() => console.log(timer.getTime()), 6000);
setTimeout(() => timer.startTimer(), 7000);
setTimeout(() => console.log(timer.getTime()), 9000);
setTimeout(() => console.log(timer.getTime()), 15000);
setTimeout(() => console.log(timer.resetTimer()), 16000);
setTimeout(() => console.log(timer.getTime()), 17000);
