let Promise = require('./Promise');
let p1 = new Promise((resolve, reject) => {
    resolve('1');
});
let p2 = new Promise((resolve, reject) => {
    resolve('2');
});
let p3 = new Promise((resolve, reject) => {
    resolve('3');
});

Promise.all([p1, p2, p3]).then(res => {
    console.log('all:' + res);
}, err => {
    console.log(err);
});

Promise.race([p1, p2, p3]).then(res => {
    console.log('race:' + res);
}, err => {
    console.log(err);
});