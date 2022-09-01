'use strict';

export const getDiff = (startDate, endDate) => {
  // get total seconds between the times
  let timeDiff = Math.abs(endDate - startDate) / 1000;
  console.log('seconds diff', timeDiff);

  // calculate (and subtract) whole days
  const daysDiff = Math.floor(timeDiff / (3600 * 24));
  timeDiff -= daysDiff * 86400;
  console.log('seconds diff after days subtract', timeDiff);

  // calculate (and subtract) whole hours
  const hoursDiff = Math.floor(timeDiff / 3600) % 24;
  timeDiff -= hoursDiff * 3600;
  console.log('seconds diff after hours subtract', timeDiff);

  // calculate (and subtract) whole minutes
  const minutesDiff = Math.floor(timeDiff / 60) % 60;
  timeDiff -= minutesDiff * 60;
  console.log('seconds diff after minutes subtract', timeDiff);

  const secondsDiff = Math.floor(timeDiff) % 60;
  console.log('seconds diff after minutes subtract', timeDiff);

  console.log('days diff', daysDiff);
  console.log('hour diff', hoursDiff);
  console.log('min diff', minutesDiff);
  console.log('sec diff', secondsDiff);

  return `${daysDiff}d ${hoursDiff}h ${minutesDiff}m ${secondsDiff}s`;
};

console.log(getDiff(new Date(2020, 1,3,10, 55, 50), new Date(2021, 1, 2, 11, 57, 55.55)))
