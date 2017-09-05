//Convert Time Local to Singapore
moment = require('moment-timezone')
timeLocalToSg = moment().tz('Asia/Singapore');
timeNow = moment(timeLocalToSg).format('YYYY-MM-DD HH:mm:ss');

console.log('timeNow: ', timeNow);
