let Promise = require('./Promise');
let promise = new Promise((resolve, reject) => {
    reject('err');
});
promise.then((data) => {
    console.log('1 succ:' + data);
}, (err) => {
    console.log('1 err:' + err);
    return new Promise((resolve, reject) => {
        reject('err2');
    });
}).then(null, null).catch((err) => {
    console.log('err:' + err);
});