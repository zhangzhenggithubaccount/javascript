let fs = require('fs');
//并行
// fs.readFile('./javascript/day41/a.txt', 'utf8', function(err, data) {
//     console.log(data);
// });
// fs.readFile('./javascript/day41/b.txt', 'utf8', function(err, data) {
//     console.log(data);
// });

//串行
// fs.readFile('a.txt', 'utf-8', function(error, data) {
//     console.log(data);
//     fs.readFile('b.txt', 'utf-8', function(error, data) {
//         console.log(data);
//     });
// });
//回调函数解决异步问题
function after(timer, callback) {
    let count = 0;
    let res = [];
    return function(data) {
        count++;
        res.push(data);
        if(count < timer) {
            return arguments.callee;
        }else {
            return callback(res);
        }
    }
}

let newFun = after(2, function(res) {
    console.log(res);
});

fs.readFile('./javascript/day41/a.txt', 'utf8', function(err, data) {
    newFun(data);
});
fs.readFile('./javascript/day41/b.txt', 'utf8', function(err, data) {
    newFun(data);
});
//newFun('jack')('Tom');