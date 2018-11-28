const _ = require('lodash');
const numbers = [6, 10, 19, 3, 4, 11, 4, 9];
_.each(numbers, function(number, i) {
    console.log(number);
});