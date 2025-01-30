


class Entity{
    constructor(name){
        this.name = name;
    }
}

class Person extends Entity{}
class Tiger extends Entity{}

function eat(food){
    console.log(`${this.name} is eating ${food}`);
}

eat('Lunch'); // associated with window/global


const person = new Person('Sanjay')
const tiger = new Tiger('SherKhan')

person.eat = eat; //eat becomes part of person
person.eat('Lunch');

tiger.eat = eat; //eat becomes part of tiger
tiger.eat('Dinner'); // tiger is eating Dinner

//callback function
function serveTreatOfTheDay(eat){
    let treats = ['IceCream','Cold Coffee','Herbal Tea']
    let treat= treats[ Math.floor(Math.random() * treats.length)];
    eat(treat);
}

serveTreatOfTheDay(tiger.eat); //?