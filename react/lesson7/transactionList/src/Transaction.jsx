import React from 'react';
import moment from 'moment';

const Transaction = ({ time, from, to, rate, amount }) => {
  const dayDate = moment(time).format('DD MMM');
  const dayTime = moment(time).format('HH:mm');
  const transactionAmount = new Intl.NumberFormat('en-GB').format(amount);
  return (
    <li className="transaction">
      <span className="transaction__date">{dayDate}</span>
      <span className="transaction__time">{dayTime}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{transactionAmount}</span>
    </li>
  );
};

export default Transaction;
