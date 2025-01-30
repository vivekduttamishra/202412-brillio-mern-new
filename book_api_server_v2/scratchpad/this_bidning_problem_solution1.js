
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

function showSkills(object,skill){
    object[skill]();
}
let tiger= new Tiger('SherKhan');
showSkills(tiger,'roar');
showSkills(tiger,'hunt');