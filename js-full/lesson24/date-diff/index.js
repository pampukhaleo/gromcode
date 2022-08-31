'use strict';

export const getDiff = (startDate, endDate) => {

  // get total seconds between the times
  let timeDiff = (endDate.getTime() - startDate.getTime()) / 1000;
  console.log('seconds diff', timeDiff);

  // calculate (and subtract) whole days
  const daysDiff = Math.floor(timeDiff / (3600 * 24));
  timeDiff -= daysDiff * 86400
  console.log('seconds diff after days subtract', timeDiff);

  // calculate (and subtract) whole hours
  const hoursDiff = Math.floor(timeDiff / 3600);
  timeDiff -= hoursDiff * 3600;
  console.log('seconds diff after hours subtract', timeDiff);

  // calculate (and subtract) whole minutes
  const minutesDiff = Math.floor(timeDiff / 60);
  timeDiff -= minutesDiff * 60;
  console.log('seconds diff after minutes subtract', timeDiff);

  // const secondsDiff = timeDiff % 60;
  console.log('seconds diff after minutes subtract', timeDiff);

  console.log('days diff', daysDiff);
  console.log('hour diff', hoursDiff);
  console.log('min diff', minutesDiff);
  console.log('sec diff', timeDiff);

  return `${daysDiff}d ${hoursDiff}h ${minutesDiff}m ${timeDiff}s`
}

console.log(getDiff(new Date(2020, 2,1,10, 55, 50), new Date(2021, 1, 1, 11, 57, 55)))
