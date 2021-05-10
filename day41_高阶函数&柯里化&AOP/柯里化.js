function curryIt(fn) {
    let len = fn.length;
    let args = [];

    return function(arg) {
        args.push(arg);
        if(args.length < len) {
            return arguments.callee;
        }else {
            return fn.apply(null, args);
        }
    }
}

let fn = function(a, b, c) {
    return a + b + c;
}

let res = curryIt(fn)(1)(2)(3);
console.log(res);