function Student(name, age) {
    this.name = name;
    this.age = age;
}

let obj = {
    name: 'jack',
    age: 15,
    sayIt: function() {
        console.log(this);
    }
};
obj.sayIt();
console.log(obj);

let std = new Student('tom', 16);
console.log(std);