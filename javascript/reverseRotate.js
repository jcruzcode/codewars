// Reverse or rotate? (6 kyu)
function revrot(str, sz) {
    // Non-sensical cases - can't take chunks
    if (sz <= 0 || str.length === 0 || sz > str.length) return "";

    // Split string into chunks of size 'sz'
    const chunks = breakStr(str, sz);

    const arr = [];
    let num, nums, tmp;

    // Loop over chunks
    for (let i = 0; i < chunks.length; i++) {
        nums = chunks[i].split(''); // array of numbers from chunk

        // sum of the cubes of chunk's digits 
        num = nums
            .map(a => +a)
            .reduce((acc, val) => acc + val ** 3, 0);

        if (num % 2 === 0) {
            arr.push(nums.reverse().join('')); // reverse chunk
        } else {
            // Rotate to the "left"
            tmp = nums.shift()
            nums.push(tmp);
            arr.push(nums.join(''));
        }

    }
    // Put modified chunks together and return as a string
    return arr.join('');
}

function breakStr(str, size) {
    const chunks = [];
    // Floor is used to ignore last chunk if its size is too small 
    const numOfChunks = Math.floor(str.length / size);
    let count = 0;
    let start = 0, end = size;

    while (count < numOfChunks) {
        // Create chunk
        chunks.push(str.substring(start, end));

        // Update indices of substring
        start += size;
        end += size;

        count++;
    }

    return chunks;
}