function getUrlParam(sUrl, sKey) {
    let rg = /\w+=\w+/g;
    let keys = sUrl.match(rg);
    let obj = {};

    for(let i = 0; i < keys.length; i++) {

        let [key, value] = keys[i].split('=');
        if(key in obj) {
            if(obj[key] instanceof Object) {
                obj[key].push(value);
            }else {
                obj[key] = Array.prototype.concat(obj[key], value);
            }
        }else {
            obj[key] = value;
        }
    }
    if(sKey) {
        return obj[sKey] != undefined? obj[sKey]: '';
    }else {
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
