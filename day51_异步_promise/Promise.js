let PENDING = 0;
let RESOLVE = 1;
let REJECT = 2;
class Promise{

    constructor(executorCallback) {
        this.status = PENDING;
        this.value = null;
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];
            try{
                executorCallback(this.resolve.bind(this), this.reject.bind(this));
            }catch(e) {
                this.status = PENDING;
                this.reject(e);
            }
    }
    resolve(data) {
        setTimeout(() => {
            if(this.status === PENDING) {
                this.status = RESOLVE;
                this.value = data;
                this.resolveCallbacks.forEach(cb => cb(this.value));
            }
        }, 0);
    }
    reject(data) {
        setTimeout(() => {
            if(this.status === PENDING) {
                this.status = REJECT;
                this.value = data;
                this.rejectCallbacks.forEach(cb => cb(this.value));
            }
        }, 0);
    }
    then(succ, fail) {
        succ instanceof Function? null: succ = (res) => {
            return res;
        };
        fail instanceof Function? null: fail = (err) => {
            throw new Error(err);
        };
        return new Promise((resolve, reject) => {
            this.resolveCallbacks.push(function(val) {
                try{
                    let res = succ(val);
                    res instanceof Promise? res.then(resolve, reject): resolve(res);
                }catch(e) {
                    reject(e);
                }
            });
            
            this.rejectCallbacks.push(function(val) {
                try{
                    let res = fail(val);
                    res instanceof Promise? res.then(resolve, reject): resolve(res);
                }catch(e) {
                    reject(e);
                }
            });
        });
    }
    catch(rejectedCb) {
        this.then(null, rejectedCb);
    }
}
module.exports = Promise;