class Dog extends Animal {
    constructor(type, environment, region, isMammals, isPredator, numberOfPaws, kind, height, isFightingDog, isPuffy) {
        super(type, environment, region, isMammals, isPredator, numberOfPaws)
        this.kind = kind;
        this.height = height;
        this.isFightingDog = isFightingDog;
        this.isPuffy = isPuffy;
    }
    dogFeatures() {
        console.log(`Hello! I'm ${this.kind}, I have ${this.height} cm in height. You are my new owner, you are not?`);
        if (this.isFightingDog === true) {
            console.log('Be aware, if you do not care of me I can pounce on you!');
        }
        if (this.isPuffy === true) {
            console.log('Look at me, I am so puffy. Hurry up to pet me!');
        } else {
            console.log('I am not so puffy but nevertheless I am still beatiful.');
        }
        return this
    }
}