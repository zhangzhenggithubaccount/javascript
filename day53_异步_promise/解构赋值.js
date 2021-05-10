//Array的解构赋值
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);
//对象的解构赋值
let {name:userName, age} = {name: 'Jack', age: 18};
console.log(userName, age);
//复杂对象的解构赋值
let [{age:useAge}, {hobby}] = [{name: 'Tom', age: 17}, {hobby: ['sleeping', 'eating']}];
console.log(useAge, hobby);
//省略解构
let [,,d] = [4, 5, 6];
console.log(d);
//默认解构
let {name:userName2, age:userAge2 = 8} = {name: 'luky', age: 18};
console.log(userName2, userAge2);

//解构赋值应用
function ajax(options) {
    var method = options.method || 'get';
}

function ajax({method = 'get', data}) {

}

ajax(
    {
        method: 'post',
        data: {
            'a': 10,
            'b': 20
        }
    }
);