//模板字符串
let name = 'jack';
let age = 18;
let str = `My name is ${name}, i am ${age} years old.`;
console.log(str);
let str1 = 'My name is ${name}, i am ${age} years old.';
str1 = str1.replace(/\$\{(\w*)\}/g, function($1) {
    console.log($1);
    return eval(arguments[1]);
});
console.log(str1);
//模板字符串换行
let userInfo = [name, age];
let lis = userInfo.map(function(item) {
    return `<li>${item}</li>`;
});
let ul = `
<ul>
    ${lis.join('')}
</ul>
`;
console.log(ul);
//模板标签
function tag(strs) {
    let values = Array.prototype.slice.call(arguments, 1);
    let res = '';
    for(let key in values) {
        res += strs[key] + values[key].toString().toUpperCase();
    }
    res += strs[strs.length - 1];
    return res;
}
let str2 = tag `My name is ${name}, i am ${age} years old.`;
console.log(str2);
//string es6 api
console.log('http://www.baidu.com'.startsWith('http'));
console.log('http://www.baidu.com'.endsWith('com'));
console.log('http://www.baidu.com'.includes('baidu'));
console.log('hi'.repeat(3));
console.log('1'.padStart(2, 0));
console.log('0'.padEnd(2, 0));