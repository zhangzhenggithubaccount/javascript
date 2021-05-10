let str = 'Hello World!';
console.log(str.toString()); //String中的toString方法被改写
console.log(Object.prototype.toString.call(str));

