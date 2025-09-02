let currenttime = new Date();
console.log(currenttime);

let local = currenttime.toString();
console.log(local);

let hours = currenttime.getHours();
console.log(hours);

let minutes = currenttime.getMinutes();
console.log(minutes);

let Day = currenttime.getDay();
console.log(Day);


class exam {
    constructor(personname) {
        this.personname = personname;
        console.log(personname);
    }
}
let result = new exam("john");

class bank {
    constructor(initialamount = 0) {
        this._balance = initialamount;
    }
    set balance(amountdeposit) {
        if (amountdeposit > 0) {
            this._balance += amountdeposit; 
            console.log(this._balance);
        }
    }
    get balance() {
        return this._balance;
    }
}
let add = new bank(10);
console.log(add);
add.balance = 300;  
console.log(add);


class addition {
    static math(a, b) {   
        return a + b;
    }
}
console.log(addition.math(4, 4));
