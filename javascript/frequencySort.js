// Simple frequency sort (6 kyu)
function solve(arr) {
    const set = new Set(arr);
    const nums = [];

    for (let element of set) {
        let array = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === element) array.push(arr[i]);
        }

        nums.push(array);
    }

    nums.sort((a, b) => {
        if (a.length === b.length) {
            return a[0] - b[0];
        }

        return b.length - a.length;
    })

    let tmp, ans = [];
    for (let item of nums) {
        tmp = item;

        for (let num of tmp) {
            ans.push(num);
        }

    }

    return ans;
}