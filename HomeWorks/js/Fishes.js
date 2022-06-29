class Fish extends Livings {
    constructor(type, environment, region, environmentType, amphibious) {
        super(type, environment, region)
        this.environmentType = environmentType;
        this.amphibious = amphibious;
    }
    showFish() {
        if (this.amphibious === true) {
            console.log(`I can live in both ${this.environmentType} and on the land`);
        } else {
            console.log(`I can live only in ${this.environmentType}`);
        }
        return this
    }
}