let fs = require('fs');
//1 Promise的方法会立即执行
//2 promise对象创建时候有个初始状态 等待态 pending
let promise = new Promise((resolve, reject) => {
    //异步任务
    fs.readFile('./javascript/day41_高阶函数&柯里化&AOP/a.txt', 'utf8', function(err, data) {
        console.log(1);
        if(err) {
            reject(err);//变失败态
        }
        resolve(data); //变成功态
    });
    fs.readFile('./javascript/day41_高阶函数&柯里化&AOP/b.txt', 'utf8', function(err, data) {
        console.log(2);
        if(err) {
            reject(err)
        }
        resolve(data);
    });

});

//发布
promise.then(success=>{
    console.log(success);
}, fail=>{
    console.log(fail);
});

