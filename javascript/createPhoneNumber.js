// Create Phone Number (6 kyu)
function createPhoneNumber(numbers) {
    let copy = numbers;
    copy.unshift('(');
    copy[3] = `${copy[3]}) `;
    copy[6] = `${copy[6]}-`;

    return copy.join('');
}

/* function createPhoneNumber(numbers) {
    const areaCode = numbers.slice(0, 3).join('');
    const start = numbers.slice(3, 6).join('');
    const end = numbers.slice(6,).join('');

    return `(${areaCode}) ${start}-${end}`;
} */