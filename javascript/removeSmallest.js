// 7 kyu - Remove the minimum
function removeSmallest(numbers) {
    if (numbers.length === 0) return [];

    const nums = [];
    const smallest = Math.min(...numbers);
    const smallIndex = numbers.indexOf(smallest)

    for (let i = 0; i < numbers.length; i++) {
        if (i !== smallIndex) nums.push(numbers[i]);
    }

    return nums;
}