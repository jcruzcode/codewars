// 6 kyu - Common array elements

function common(a, b, c) {
    const commonAB = commonItems(a, b);
    const commonABC = commonItems(commonAB, c);
    let sum = 0;

    for ( let i = 0; i < commonABC.length; i++ ) {
        sum += commonABC[i];
    }

    return sum;

    function commonItems(a, b) {
        let count = {}, items = [], keys;
    
        for (let item of b) {
            count[item] ? count[item] += 1 : count[item] = 1;
        }
    
        for ( let i = 0; i < a.length; i++ ) {
            if ( a[i] in count && count[a[i]] > 0) {
                count[a[i]]--;
                items.push(a[i]);
            }
        }
    
        return items;
    }
}
