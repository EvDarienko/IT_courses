class Cat extends Animal {
    constructor(type, environment, region, isMammals, isPredator, numberOfPaws, specie, size, sound, isSmoothCoat) {
        super(type, environment, region, isMammals, isPredator, numberOfPaws)
        this.specie = specie;
        this.size = size;
        this.sound = sound;
        this.isSmoothCoat = isSmoothCoat;
    }
    catFeatures() {
        if (this.size < 0.5 && this.specie != 'Домашний кот') {
            console.log(`Hi! I'm only kid of ${this.specie}. Don't be afraid of me, I'm still too little.`);
        } else if (this.size > 0.5 && this.specie != 'Домашний кот') {
            console.log('Run! Otherwise it will be your last day!');
        } else {
            console.log(`I'm just a ${this.specie}. You can pet me.`);
        }
        console.log(`I can sound, look here: ${this.sound}-${this.sound}-${this.sound}.`);
        return this
    }
}