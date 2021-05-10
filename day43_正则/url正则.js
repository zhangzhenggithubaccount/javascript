function getUrlParam(sUrl, sKey) {
    let rg = /\w+=\w+/g;
    let keys = sUrl.match(rg);
    
    if(sKey) {
        let arr = [];
        for(let idx in keys) {
            let item = keys[idx].split('=');
            if(item[0] === sKey) {
                arr.push(item[1]);
            }
        }
        if(arr.length === 0) {
            return '';
        }else if(arr.length === 1){
            return arr[0];
        }else {
            return arr;
        }
        
    }else {
        let obj = {};
        for(let idx in keys) {
            let item = keys[idx].split('=');
            if(item[0] in obj) {
                if(obj[item[0]] instanceof Object) {
                    obj[item[0]].push(item[1]);
                }else {
                    let temp = obj[item[0]];
                    obj[item[0]] = [];
                    obj[item[0]].push(temp);
                    obj[item[0]].push(item[1]);
                }
            }else {
                obj[item[0]] = item[1];
            }
        }
        return obj;
    }
}
let url = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe';
let obj1 = getUrlParam(url, 'key');
console.log(obj1);
let obj2 = getUrlParam(url, 'test');
console.log(obj2);
let obj3 = getUrlParam(url);
console.log(obj3);

function valid1() { 
    var a = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&key=4&test1=4#hehe', 'abc'); 
    return a === ''; 
}
let res = valid1();
console.log(res);
