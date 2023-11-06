// 6 kyu - Array Helpers
Array.prototype.square = function () {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(this[i] ** 2);
    }

    return arr;
}

Array.prototype.cube = function () {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(this[i] ** 3);
    }

    return arr;
}

Array.prototype.sum = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }

    return sum;
}

Array.prototype.average = function () {
    if (this.length === 0) {
        return NaN;
    }

    return this.sum() / this.length;
}

Array.prototype.even = function() {
    let odds = [];
    for (let i = 0; i < this.length; i++) {
        if ( this[i] % 2 === 0) {
            odds.push(this[i]);
        }
    }
    return odds;
}

Array.prototype.odd = function() {
    let odds = [];
    for (let i = 0; i < this.length; i++) {
        if ( this[i] % 2 !== 0) {
            odds.push(this[i]);
        }
    }
    return odds;
}

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.average());
console.log(numbers.sum());
console.log(numbers.even());
console.log(numbers.odd());


