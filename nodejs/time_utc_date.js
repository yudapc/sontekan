const moment = require('moment')
const date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
const stillUtc = moment.utc(date).toDate();
const local = moment(stillUtc).local().format('YYYY-MM-DD HH:mm:ss');

console.log('stillUtc: ', stillUtc);
console.log('local: ', local);
