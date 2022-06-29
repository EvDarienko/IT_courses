class Duck extends Bird {
    constructor(type, environment, region, predator, migratingBird, size, homeBird, weight, layingBird) {
        super(type, environment, region, predator, migratingBird, size)
        this.homeBird = homeBird;
        this.weight = weight;
        this.layingBird = layingBird;
    }
    duckFeatures() {
        if (this.homeBird === true) {
            console.log(`I live with people. They feed me. I like it.`);
        } else {
            console.log(`I hate living with people. All they want is to gobble up me!`);
        }
        if (this.weight > 5) {
            console.log(`I eat very well. I'm broiler!`);
        } else {
            console.log(`I'm starving, give me the food please!`);
        }
        if (this.layingBird === true) {
            console.log(`I'm helpful for my owners. I give them eggs. I know they love me.`);
        } else {
            console.log(`It seems to me I will be gobbled very soon, since I don't even give any eggs :()`);
        }
        return this
    }
}