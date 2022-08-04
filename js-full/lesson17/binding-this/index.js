// Learn requirement
// Create step by step algorithm. Input Output
// Write draft solution & do testing
// Refactoring & final testing

// export object callbackPrompt
// has a message
// method showPrompt has message asks for cellphone number and console it
// method showDeferredPrompt calls method showPrompt
// has a ms pause that comes from argument

export const callbackPrompt = {
  message: 'message',
  showPrompt() {
    const number = prompt(this.message);
    console.log(number);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

callbackPrompt.showDeferredPrompt(1000);
