
class Tiger{
    constructor(name){
        this.name = name;
    }

    hunt(){
        console.log(`${this.name} is hunting`);
    }

    roar(){
        console.log(`${this.name} is roaring`);
    }
}

function showSkills(skill){
    skill();
}