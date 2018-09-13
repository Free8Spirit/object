// Modded by Vert, David

// Working with classes

const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "bic"
}

console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);

// Change the value of a property
pen.color = "red"; // Modify the pen color property
console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

pen.price = "2.50";
console.log(`My pen costs $${pen.price}`);

//*****************************************************
// Example of an object: RPG Game Character Aurora
// have class create the aurora object with a name, health and strength

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    describe() {
        return `${this.name} has ${this.health} health points and ${this.strength} as strength with ${this.xp} XP points`;
    }
}
console.log(aurora.describe());

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength with ${aurora.xp} XP points`);
// Aurora is harmed by an arrow - reduce health by 20
aurora.health -= 20;
// Aurora equips a strength necklace - increase strength by 10
aurora.strength += 10;
// Aurora learns a new skill
aurora.xp += 15;

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength with ${aurora.xp} XP points`);

function describe(character) {
    console.log(`${character.name} has ${character.health} health points and ${character.strength} as strength with ${character.xp} XP points`);
}

describe(aurora);

const ryu = {
    name: "Ryu",
    health: 250,
    strength: 55,
    xp: 120,
    describe() {
        return `${this.name} has ${this.health} health points and ${this.strength} as strength with ${this.xp} XP points`;
    }
}
console.log(ryu.describe());