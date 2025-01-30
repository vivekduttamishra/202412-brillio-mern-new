function eat(food){
    console.log(`${this.name} is eating ${food}`);
}

eat('Lunch'); // not associated with any object.

class Entity{
    constructor(name){
        this.name = name;
    }
}

class Person extends Entity{}
class Tiger extends Entity{}

const person = new Person('Sanjay')
const tiger = new Tiger('SherKhan')

person.eat = eat; //eat becomes part of person
person.eat('Lunch');

tiger.eat = eat; //eat becomes part of tiger
tiger.eat('Dinner'); // tiger is eating Dinner

let eat2 = person.eat; 

eat2('Snack'); //has no this associated.