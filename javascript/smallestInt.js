// 8 kyu - Find the smallest integer in the array
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let num = args[0];

        for (let arg of args) {
            if (arg < num) {
                num = arg;
            }
        }

        return num;
    }
}