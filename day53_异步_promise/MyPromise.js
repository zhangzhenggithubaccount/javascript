let Promise = require('./Promise');
let promise = new Promise((resolve, reject) => {
    resolve('ok');
    //reject('err');
});
promise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
}).then((data) => {
    console.log(data);
}, (err) => {
    console.log('error:' + err);
});
let p1 = new Promise((resolve, reject) => {
    resolve(1);
});
let p2 = new Promise((resolve, reject) => {
    resolve(2);
});
let p3 = new Promise((resolve, reject) => {
    resolve(3);
});
Promise.all([p2, p1, p3]).then((data) => {
    console.log(data);
});
Promise.race([p2, p1, p3]).then((data) => {
    console.log(data);
});