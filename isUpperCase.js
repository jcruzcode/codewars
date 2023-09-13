/* 8 kyu - Is the string uppercase? */
String.prototype.isUpperCase = function(str) {
    return this.valueOf() === this.valueOf().toUpperCase();
}