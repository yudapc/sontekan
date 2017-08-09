console.log('-------------------------------------');
console.log('-----Menghitung Interval Waktu-------');
console.log('-------------------------------------');

const moment = require('moment');
const eventTime = moment('2017-07-14T10:03:18+07:00').format('X');
const currentTime = moment().format('X');
const diffTime = eventTime - currentTime;
const duration = moment.duration(diffTime*1000, 'milliseconds');
const interval = 1000;

setInterval(() => {
  duration = moment.duration(duration - interval, 'milliseconds');
  console.log('duration = ' + duration.minutes());
}, interval);

