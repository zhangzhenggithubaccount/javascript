let fs = require('fs');

function read(url) {
    return new Promise((resolver, reject)=>{

        fs.readFile(url, 'utf8', function(err, data) {
            if(err) return reject(err);
            resolver(data);
        });

    });
}

let promise = read('./javascript/day41_高阶函数&柯里化&AOP/a.txt').then(success=> {
    console.log(success);
    return read('./javascript/day41_高阶函数&柯里化&AOP/b1.txt');
});
console.log(promise);
promise.then(success=>{
    console.log(success);
}).catch(fail=>{
    console.log('err');
});