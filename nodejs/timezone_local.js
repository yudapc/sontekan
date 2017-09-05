//Get local timezone
moment = require('moment-timezone')
localTimezone = moment.tz.guess();

console.log('local timezone: ', localTimezone);
