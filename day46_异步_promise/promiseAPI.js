//实现方法then()
//类方法 race()/all()/resolve()/reject()
//all()
let fs = require('fs');
function read(url) {

    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', function(err, data) {
            if(err) return reject(err);
            resolve(data);
        });
    });

};
let a = './javascript/day41_高阶函数&柯里化&AOP/a.txt';
let b = './javascript/day41_高阶函数&柯里化&AOP/b.txt';
//all 传入Promise实例Array 返回 Promise实例
//同时读取a, b 文件
Promise.all([read(a), read(b)]).then(success=>{
    console.log(success);
}, fail=>{
    console.log('err');
});

//race 传入Promise实例Array 返回 Promise实例
//先回来返回其结果
Promise.race([read(b), read(a)]).then(success=>{
    console.log(success);
}, fali=> {
    console.log('err');
});

//返回一个成功态promise
Promise.resolve().then(success=>{
    console.log('resolve success');
}, fail=>{
    console.log('resolve fail');
});

//返回一个失败态promise
Promise.reject().then(success=>{
    console.log('reject success');
}, fail=>{
    console.log('reject fail');
});
