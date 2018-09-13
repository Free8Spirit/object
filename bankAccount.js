// Author: Vert, David  9/17/2018
var account = {
    name: "Alex",
    balance: 0,
    credit(x, y) {
        this.balance += x;
        this.balance -= y;
        return `${this.balance}`;
    },
    describe() {
        return `Owner: ${this.name}, balance ${this.balance}`
    }
}

console.log(account.describe());
account.credit(250, 0);
console.log(account.describe());
console.log(account.describe(account.credit(0, 80)));