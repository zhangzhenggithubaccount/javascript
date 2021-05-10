let types = ['String', 'Object', 'Array', 'Null', 'Undefined'];
let Type = {};

types.forEach(type=>{
    Type['is' + type] = isType(type);
});

//闭包
function isType(type) {
    return function(obj) {
        return Object.prototype.toString.call(obj).includes(type);
    }
}

let str = '';
console.log(Type.isString(str));
console.log(Type.isArray(str));