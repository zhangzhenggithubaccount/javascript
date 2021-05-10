//APO
//剩余运算符号
function say(...who) {
    console.log(who + ', 你好!');
}

Function.prototype.before = function(fn) {
    let _this = this;
    return function() {
        fn();
        //ES6展开运算符
        _this(...arguments);
    }
}

let newFun = say.before(function() {
    console.log('drink!');
});
newFun('李焕英', '杨超越');