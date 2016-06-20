require('date-utils');

var dt = new Date();
var formatted = dt.toFormat("YYYY/MM/DD HH:24MI:SS");
console.log(formatted);
