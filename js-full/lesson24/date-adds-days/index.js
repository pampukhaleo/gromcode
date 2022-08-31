'use strict';

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const futureDay = new Date(date).setDate(day + days);

  return weekDays[new Date(futureDay).getDay()];
};

console.log(dayOfWeek(new Date(2019, 1, 3), 1));
