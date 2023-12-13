// Cumulative Triangle (6 kyu)
function cumulativeTriangle(n) {
    function startNum(n) {
        let nextNum = 0;
        const firstNum = 1;

        if (n === 1) return 1;

        for (let i = 2; i <= n; i++) {
            i === 2 ? nextNum = (i - 1) + firstNum : nextNum = nextNum + (i - 1);
        }

        return nextNum;
    }

    let num = startNum(n), sum = 0, count = 0;

    while (count < n) {
        sum += num;
        num++;
        count++;
    }

    return sum;
}

for (let i = 1; i <= 6; i++) {
    console.log(cumulativeTriangle(i))
}