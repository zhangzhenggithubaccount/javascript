let Promise = require('./Promise');

let promise = new Promise((resolve, reject) => {

    resolve('test ok');
    // reject('test err');

});
promise.then((success) => {
    console.log('1. success: ' + success);
    return 1;
}, (fail) => {
    console.log('1. err: ' + fail);
}).then((success) => {
    console.log('2. success: ' + success);
    return 2;
}, (fail) => {
    console.log('2. err: ' + fail);
});

promise.then((success) => {
    console.log('1. success: ' + success);
    return 1;
}, (fail) => {
    console.log('1. err: ' + fail);
}).then((success) => {
    console.log('2. success: ' + success);
    return 2;
}, (fail) => {
    console.log('2. err: ' + fail);
});