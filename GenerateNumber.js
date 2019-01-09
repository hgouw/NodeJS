console.log('Loading lambda function');

exports.handler = (event, context, callback) => {
    let min = parseInt(event.min); // min = 0;
    let max = parseInt(event.max); // max = 10;

    let geneneratedNumber = Math.floor(Math.random() * max) + min;
    // Math.random() generates a random number between 0 and 1

    callback(null, geneneratedNumber);
    // callback(error, success);
};