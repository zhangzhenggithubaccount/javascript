//发布订阅 发布和订阅没关系 中间通过数组进行关联
// 1.创建 {} 2.this指向{} 3.指向函数体 4.返回this
function Events() {
    this.callbacks = [];
    this.results = [];
}

//订阅
Events.prototype.on = function(callback) {
    this.callbacks.push(callback);
}

//发布
Events.prototype.emit = function(data) {
    this.results.push(data);
    this.callbacks.forEach(item=>item(this.results));
}

let events = new Events();
//订阅
events.on(function(res) {
    if(res.length === 2) {
        console.log(res);
    }
});

let fs = require('fs');
fs.readFile('./javascript/day41/a.txt', 'utf8', function(err, data) {
    events.emit(data);
});
fs.readFile('./javascript/day41/b.txt', 'utf8', function(err, data) {
    events.emit(data);
});

