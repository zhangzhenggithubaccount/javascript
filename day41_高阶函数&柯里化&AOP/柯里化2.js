function after(times, callback) {
    let count = 0;
    return function() {
        count++;
        if(count < times) {
            return arguments.callee;
        }else {
            return callback();
        }
    }
}

let fn = after(3, function() {
    console.log('1');
});

fn()()();