class Livings {
    constructor(type, environment, region) {
        this.type = type;
        this.environment = environment;
        this.region = region;
    }
    showAnimal() {
        console.log(`You chose ${this.type} living in ${this.environment}`);
        return this
    }
}