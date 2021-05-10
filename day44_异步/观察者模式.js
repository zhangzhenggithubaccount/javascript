//被观察者
class Subject{
    constructor(name) {
        this.name = name;
        this.observers = [];
        this.mood = 'happy';
    }
    //接受观察者方法
    attach(observer) {
        this.observers.push(observer);
    }

    setMood(mood) {
        this.mood = mood;
        this.observers.forEach(item=>item.update(this.mood));
    }
}

//观察者
class Observer{
    constructor(name) {
        this.name = name;
    }
    update(mood) {
        console.log(this.name + ' -> ' + mood);
    }
}

let girl = new Subject('Lily');
let boy = new Observer('Tom');
let father = new Observer('Jack');

girl.attach(boy);
girl.attach(father);

girl.setMood('sad');