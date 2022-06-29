class Animal extends Livings {
    constructor(type, environment, region, isMammals, isPredator, numberOfPaws) {
        super(type, environment, region)
        this.isMammals = isMammals;
        this.isPredator = isPredator;
        this.numberOfPaws = numberOfPaws;
    }
    showAnimal() {
        if (this.isMammals === true) {
            console.log(`I can feed my children with milk.`);
        } else {
            console.log(`I don't care what my children eat.`);
        }
        if (this.isPredator === true) {
            console.log(`I will swallow you, run!`);
        } else {
            console.log(`Don't be a chicken, I ain't gonna touch you.`);
        }
        return this
    }
}