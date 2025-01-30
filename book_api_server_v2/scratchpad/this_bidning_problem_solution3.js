
class Tiger{
    constructor(name){
        this.name = name;
    }

    hunt(){
        console.log(this.name,` is hunting`);
    }

    roar(){
        console.log(this.name, `is roaring`);
    }

    
}

function showSkills(skill){
    skill()
}
let tiger= new Tiger('SherKhan');


let sherkhanHunts= tiger.hunt.bind(tiger);

sherkhanHunts('deer');

let eagle ={ name: 'Eagle'};
eagle.hunt = tiger.hunt;  //now tiger.hunt became eagle.hunt
eagle.hunt();

let snake = {name: 'Hiss'};
snake.hunt=sherkhanHunts;   //sherkhandHunts is permanently binding to tiger
snake.hunt();  //still uses 'tiger' as this