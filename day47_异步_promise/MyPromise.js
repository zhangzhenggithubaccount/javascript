let Promise = require('./Promise');

//箭头函数this指向不是promise
let promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject('error');
        //resolve('access');
    }, 1000);
    //resolve('jack');
});
promise.then(success => {
    console.log('1: ' + success);
}, fail => {
    console.log('1: ' + fail);
});
promise.then(success => {
    console.log('2: ' + success);
}, fail => {
    console.log('2: ' + fail);
});

