class Bird extends Livings {
    constructor(type, environment, region, predator, migratingBird, size) {
        super(type, environment, region)
        this.predator = predator;
        this.migratingBird = migratingBird;
        this.size = size;
    }
    showBird() {
        if (this.predator === true) {
            console.log(`I like a meat. Be careful!`);
        } else {
            console.log(`I eat only small insects`);
        }
        if (this.migratingBird === true) {
            console.log(`I'm afraid of winter. So I fly away to warm countries during this period.`);
        } else {
            console.log(`I'm not afraid of winter. I can stay on one place as much as I like.`);
        }
        if (this.size < 30) {
            console.log(`I'm a small bird, I'm afraid of everyone. Stay away of me!`)
        } else {
            console.log(`I'm not afraid of you but you should be. You can get close if you dare!`);
        }
        return this
    }
}