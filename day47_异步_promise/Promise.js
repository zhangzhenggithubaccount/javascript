class Promise{
    constructor(process) {
        this.status = 'pending';
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];
        try{
            process(this.resolve.bind(this), this.reject.bind(this));
        }catch(e) {
            this.status = 'fail';
            this.failVal = e;
        }
    }
    //订阅success或者fail
    then(success, fail) {
        if(this.status !== 'pending') {
            if(this.status === 'success') {
                success(this.succVal);
            }else if(this.status === 'fail') {
                fail(this.failVal);
            }
        }else {
            this.resolveCallbacks.push(success);
            this.rejectCallbacks.push(fail);
        }
    }
    //发布success
    resolve(res) {
        if(this.status === 'pending') {
            this.succVal = res;
            this.status = 'success';
            this.resolveCallbacks.forEach(item => item(this.succVal));
        }
    }
    //发布success
    reject(err) {
        if(this.status === 'pending') {
            this.failVal = err;
            this.status = 'fail';
            this.rejectCallbacks.forEach(item => item(this.failVal));
        }
    }

}
//nodejs 模块输出
module.exports = Promise;