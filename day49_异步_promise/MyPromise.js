let Promise = require('./Promise');

let promise = new Promise((resolve, reject) => {

    resolve('test ok');
    // reject('test err');
    throw new Error('error');

});
promise.then((success) => {
    console.log('1. success: ' + success);
}, (fail) => {
    console.log('1. err: ' + fail);
});
promise.then((success) => {
    console.log('2. success: ' + success);
}, (fail) => {
    console.log('2. err: ' + fail);
});