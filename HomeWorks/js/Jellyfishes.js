class Jellyfish extends Fish {
    constructor(type, environment, region, environmentType, amphibious, toxic, length, lengthOfTentacles) {
        super(type, environment, region, environmentType, amphibious)
        this.toxic = toxic;
        this.length = length;
        this.lengthOfTentacles = lengthOfTentacles;
    }
    jellyfishFeatures() {
        if (this.toxic === true) {
            console.log(`I have tentacles of ${this.lengthOfTentacles} meters length and I can kill if you decide to touch me! Be aware!`);
        } else {
            console.log(`I have tentacles of ${this.lengthOfTentacles} meters length and I'm afraid of people. Don't touch me please!`);
        }
        return this
    }
}