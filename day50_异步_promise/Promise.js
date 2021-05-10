let PENDING = 0;
let RESOLVE = 1;
let REJECT = 2;
class Promise{

    constructor(executorCallback) {
        this.status = PENDING;
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];
        this.value;
        //try catch 不能处理异步函数
        try{
            executorCallback(this.resolve.bind(this), this.reject.bind(this));
        }catch(e) {
            this.status = PENDING;
            this.reject(e);
        }
    }
    resolve(res) {
        setTimeout(() => {
            if(this.status === PENDING) {
                this.status = RESOLVE;
                this.value = res;
                this.resolveCallbacks.forEach(cb => cb(this.value));
            }
        });
    }
    reject(err) {
        setTimeout(() => {
            if(this.status === PENDING) {
                this.status = REJECT;
                this.value = err;
                this.rejectCallbacks.forEach(cb => cb(this.value));
            }
        });
    }
    then(success, fail) {
        //返回一个新的Promise实例
        return new Promise((resolve, reject) => {
            this.resolveCallbacks.push(function(val) {
                try{
                    let x = success(val);
                    x instanceof Promise? x.then(resolve, reject): resolve(x);
                }catch(e) {
                    reject(e);
                }
            });
            this.rejectCallbacks.push(fail);
        });

    }

}

module.exports = Promise;