let Promise = require('./Promise');

let promise = new Promise((resolve, reject) => {
    resolve(1);
    throw new Error('error');
});

promise.then((data) => {
    console.log('1:' + data);
}, (err) => {
    console.log('1' + err);
}).then((data) => {
    console.log('2:' + data);
}, (err) => {
    console.log('2:' + err);
});