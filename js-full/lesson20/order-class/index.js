'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
class Order {
  constructor(price, city, type) {
    this.ID = Math.floor(Math.random() * 1000);
    this.price = price;
    this.dateCreated = new Date()
    this.dateConfirmed = 0;
    this.isConfirmed = false;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    if (this.type === 'Sell' || this.type === 'Buy') {
      return true
    }
    return false
  }
}

const order = new Order(999, 'Kiev', 'sell');
console.log(order);
