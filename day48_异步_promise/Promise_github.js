var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;

class Promise {
    constructor(callback) {
        this.status = PENDING;
        this.value = null;
        this.defferd = [];
        setTimeout(callback.bind(this, this.resolve.bind(this), this.reject.bind(this)), 0);
    }

    //触发改变promise状态到FULFILLED
    resolve(result) {
        this.status = FULFILLED;
        this.value = result;
        this.done();
    }

    //触发改变promise状态到REJECTED
    reject(error) {
        this.status = REJECTED;
        this.value = error;
    }

    //处理defferd
    handle(fn) {
        if (!fn) {
            return;
        }
        var value = this.value;
        var t = this.status;
        var p;
        if (t === PENDING) {
            this.defferd.push(fn);
        } else {
            if (t === FULFILLED && typeof fn.onfulfiled == 'function') {
                p = fn.onfulfiled(value);
            }
            if (t === REJECTED && typeof fn.onrejected == 'function') {
                p = fn.onrejected(value);
            }
            var promise = fn.promise;
            if (promise) {
                if (p && p.constructor === Promise) {
                    p.defferd = promise.defferd;
                } else {
                    p = this;
                    p.defferd = promise.defferd;
                    this.done();
                }
            }
        }
    }

    //触发promise defferd里面需要执行的函数
    done() {
        var status = this.status;
        if (status === PENDING) {
            return;
        }
        var defferd = this.defferd;
        for (var i = 0; i < defferd.length; i++) {
            this.handle(defferd[i]);
        }
    }

    /*储存then函数里面的事件
    返回promise对象
    defferd函数当前promise对象里面
    */
    then(success, fail) {
        var o = {
            onfulfiled: success,
            onrejected: fail
        };
        var status = this.status;
        o.promise = new this.constructor(function () {
        });
        if (status === PENDING) {
            this.defferd.push(o);
        } else if (status === FULFILLED || status === REJECTED) {
            this.handle(o);
        }
        return o.promise;
    }

}

module.exports = Promise;