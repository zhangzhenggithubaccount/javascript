class Promise{
    constructor(executorCallback) {
        this.status = 'pending';
        this.resolvedCallbacks = [];
        this.rejectedCallbacks = [];
        try{
            executorCallback(this.resolve.bind(this), this.reject.bind(this));
        }catch (e){
            this.reject(e);
        }
        
    }
    resolve(succ) {
        if(this.status === 'pending') {
            this.status = 'resolved';
            this.value = succ;
            this.resolvedCallbacks.forEach(cb => cb(this.value));
        }
    }
    reject(fail) {
        console.log(fail);
        if(this.status === 'pending') {
            this.status = 'rejected';
            this.value = fail;
            this.rejectedCallbacks.forEach(cb => cb(this.value));
        }
    }
    handle(promise, res, resolve, reject) {
        if(res !== null && res instanceof Promise) {
            let called;
            try{
                if(typeof res.then === 'function') {
                    res.then.call(res, function(cb) {
                        if(called) return;
                        called = true;
                        handle(promise, cb, resolve, reject);
                    }, function(err) {
                        if(called) return;
                        called = true;
                        reject(err);
                    });
                }
            }catch(e){
                if(called) return;
                called = true;
                reject(e);
            }
        }else {
            resolve(res);
        };
    }
    // 1.假如返回是一个普通值 会把结果传入下一次then的成功回调
    // 2.发生错误 会被下一次then的失败捕获
    // 3.throw new Error('')
    // 4.return new Primise((resolve, reject) => {
    //      reject('');
    //      resolve('');
    //  });
    then(success, fail) {
        if(this.status !== 'pending') {
            if(this.status === 'resolved') {
                try{
                    let promise = new Promise((resolve, reject) => {
                        
                            setTimeout(() => {
                                let res = success(this.value);
                                this.handle(promise, res, resolve, reject);
                            });
                        
                    });
                    return promise;
                } catch(e) {
                    return new Promise((resolve, reject)=>{reject(e)});
                }
            }else if(this.status === 'rejected') {
                fail(this.value);
            }
        }else {
            this.resolvedCallbacks.push(success);
            this.rejectedCallbacks.push(fail);
        }
    }
}

module.exports = Promise;