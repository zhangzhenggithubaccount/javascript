let fs = require('fs');

function after(timer, callback) {
    let count = 0;
    let args = [];
    return function(arg) {
        count++;
        args.push(arg);
        if(count < timer) {
            return arguments.callee;
        }else {
            return callback.apply(null, args);
        }
    }
}

let aft = after(2, function(...data) {
    console.log(data);
});

fs.readFile('./javascript/day41/a.txt', 'utf8', function(err, data) {
    aft(data);
});
fs.readFile('./javascript/day41/b.txt', 'utf8', function(err, data) {
    aft(data);
});