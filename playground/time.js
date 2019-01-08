var moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = new Date();
// console.log(date);

// var date = moment();
// date.add(100, 'year').subtract(9, 'months');
//  console.log(date.format('MMM Do YYYY'));

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var date = moment();
console.log(date.format('h:m a'));
console.log(date.format('h:mm a'));