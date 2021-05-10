//被观察者
class Subject{
    constructor(name) {
        this.name = name;
        this.observers = [];
        this.mood = 'happy';
    }
    attach(observer) {
        this.observers.push(observer);
    }
    setMood(mood) {
        this.mood = mood;
        this.observers.forEach(ob=>ob.update(this.mood));
    }
}

//观察者
class Observer{
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(this.name + ':' + data);
    }
}

let luly = new Subject('luly');

let jack = new Observer('jack');
let tom = new Observer('tom');

luly.attach(jack);
luly.attach(tom);

luly.setMood('sad');