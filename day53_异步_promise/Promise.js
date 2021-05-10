const PENDING = 0;
const RESOLVE = 1;
const REJECT = 2;
class Promise{
    constructor(executorCallback) {
        this.status = PENDING;
        this.val = null;
        this.resolveCallback = [];
        this.rejectCallback = [];
        try{
            executorCallback(this.resolve.bind(this), this.reject.bind(this));
        }catch(e) {
            this.reject(e);
        }
    }
    resolve(data) {
        setTimeout(() => {
            if(this.status === PENDING) {
                this.status = RESOLVE;
                this.val = data;
                this.resolveCallback.forEach(cb => cb(this.val));
            }
        }, 0);
    }
    reject(err) {
        setTimeout(() => {
            if(this.status === PENDING) {
                this.status = REJECT;
                this.val = err;
                this.rejectCallback.forEach(cb => cb(this.val));
            }
        }, 0);
    }
    then(succ, fail) {
        succ instanceof Function? null: succ = function(val) {
            return val;
        };
        fail instanceof Function? null: fail = function(val) {
            return val;
        };
        return new Promise((resolve, reject) => {
            this.resolveCallback.push(function(val) {
                try{
                    let res = succ(val);
                    res instanceof Promise? res.then(resolve, reject): resolve(res);
                }catch(e) {
                    reject(e);
                }
            });
            this.rejectCallback.push(function(val) {
                try{
                    let res = fail(val);
                    res instanceof Promise? res.then(resolve, reject): resolve(res);
                }catch(e) {
                    reject(e);
                }
            });
        });
    }
    catch(fail) {
        this.then(null, fail);
    }
    static all(promiseArr) {
        let res = [];
        return new Promise((resolve, reject) => {
            for(let i = 0; i < promiseArr.length; i++) {
                promiseArr[i].then(success => {
                    res[i] = success;
                    if(res.length === promiseArr.length) {
                        resolve(res);
                    }
                }, fail => {
                    reject(fail);
                });
            }
        });
    }
    static race(promiseArr) {
        return new Promise((resolve, reject) => {
            for(let i = 0; i < promiseArr.length; i++) {
                promiseArr[i].then(success => {
                    resolve(success);
                }, fail => {
                    reject(fail);
                });
            }
        });
    }
    static resolve(data) {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }
    static reject(data) {
        return new Promise((resolve, reject) => {
            reject(data);
        });
    }
}
module.exports = Promise;