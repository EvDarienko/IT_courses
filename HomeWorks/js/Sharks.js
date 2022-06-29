class Shark extends Fish {
    constructor(type, environment, region, environmentType, amphibious, bitePower, speed) {
        super(type, environment, region, environmentType, amphibious)
        this.bitePower = bitePower;
        this.speed = speed;
    }
    sharkFeatures() {
        console.log(`I'm attacking with speed of ${this.speed} km/h and can bite with power of ${this.bitePower} kN`);
        return this
    }
}