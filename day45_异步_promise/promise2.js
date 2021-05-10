let fs = require('fs');
function read(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', (err, data) => {
            if(err) return reject(err);
            resolve(data);
        });
    });
}

//Promise解决回调地狱
read('./javascript/day41_高阶函数&柯里化&AOP/a.txt').then(success=>{
    console.log(success);
    return read('./javascript/day41_高阶函数&柯里化&AOP/b.txt');
}).then(success=>{
    console.log(success);
});