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
        this.observers.forEach(obr=>obr.update(this.mood));
    }
}
//观察者
class Observer{
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(this.name + ' : ' + data);
    }
}

let luky = new Subject('luky');
let jack = new Observer('jack');
let tom = new Observer('tom');

luky.attach(jack);
luky.attach(tom);

luky.setMood('sad');

