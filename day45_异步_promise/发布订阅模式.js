//发布和订阅无直接联系
function Events() {
    this.callbacks = [];
    this.results = [];
}
//订阅
Events.prototype.on = function(callbacks) {
    this.callbacks.push(callbacks);
}
//发布
Events.prototype.emit = function(data) {
    this.results.push(data);
    this.callbacks.forEach(cb=>cb(this.results));
}

let events = new Events();
events.on(function(res) {
    if(res.length === 2) {
        console.log(res);
    }
});
events.emit('jack');
events.emit('Tom');
