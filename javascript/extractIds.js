// 6 kyu - Extract the IDs from the data set
function extractIds(data, arr = []) {
    const ids = arr;

    for (let key in data) {
        typeof(data[key]) === 'number' ? ids.push(data[key]) : extractIds(data[key], ids);
    }
    
    return ids;
}


const data = {
    id: 1,
    items: [
        { id: 2 },
        {
            id: 3, items: [
                { id: 4 },
                { id: 5 }
            ]
        }
    ]
}

console.log(extractIds(data));

