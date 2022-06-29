class Eagle extends Bird {
    constructor(type, environment, region, predator, migratingBird, size, wingspan, airspeed, beakSize) {
        super(type, environment, region, predator, migratingBird, size)
        this.wingspan = wingspan;
        this.airspeed = airspeed;
        this.beakSize = beakSize;
    }
    eagleFeatures() {
        console.log(`I have wingspan of ${this.wingspan} meters and I can run after the victiom with the speed of ${this.airspeed} km/h`);
        return this
    }
}