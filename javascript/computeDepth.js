// Integer Depth (6 kyu)

function computeDepth(x) {
    const digits = new Set();
    let currentNum, nums, count = 0;

    while (digits.size < 10) {
        count++;

        currentNum = String(x * count);
        nums = currentNum.split('');

        for (let num of nums) {
            digits.add(num);
        }
    }

    return count;
}

console.log(computeDepth(1));
console.log(computeDepth(42));