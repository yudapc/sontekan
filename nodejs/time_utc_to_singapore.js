moment = require('moment-timezone')
startDate = '2017-09-05 09:00:00'
utcTime = moment.utc(startDate)
sgTime = moment(utcTime).tz('Asia/Singapore').format('YYYY-MM-DD HH:mm:ss')

console.log('utc time: ', utcTime);
console.log('sg time: ', sgTime);
