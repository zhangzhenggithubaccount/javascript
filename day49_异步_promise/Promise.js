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
        setTimeout(() => {
        try{
                executorCallback(this.resolve.bind(this), this.reject.bind(this));
            }catch(e) {
                this.status = PENDING;
                this.reject(e);
            }
        });
    }
    resolve(res) {
        if(this.status === PENDING) {
            this.status = RESOLVE;
            this.value = res;
            this.resolveCallbacks.forEach(cb => cb(this.value));
        }
    }
    reject(err) {
        if(this.status === PENDING) {
            this.status = REJECT;
            this.value = err;
            this.rejectCallbacks.forEach(cb => cb(this.value));
        }
    }
    then(success, fail) {
        
        this.resolveCallbacks.push(success);
        this.rejectCallbacks.push(fail);

    }

}

module.exports = Promise;