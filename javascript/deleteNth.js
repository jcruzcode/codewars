function deleteNth(numbers, occurences) {
    let counter = {};

    for (let number of numbers) {
        counter[number] ? counter[number] += 1 : counter[number] = 1;
    }

    const keys = Object.keys(counter);
    const uniqueNumbers = keys.map((number) => Number(number));

    let deleteIndices = [];

    for (let i = 0; i < uniqueNumbers.length; i++) {
        let count = 0;

        for (let j = 0; j < numbers.length; j++) {
            if (uniqueNumbers[i] === numbers[j]) {
                count++;

                if (count > occurences) {
                    deleteIndices.push(j);   
                }
            }

        }
    }
    
    deleteIndices.sort( (a,b) => a - b );

    for ( let k = deleteIndices.length - 1; k >= 0; k-- ) {
        numbers.splice(deleteIndices[k], 1);
    }
   
    return numbers;

}

console.log(deleteNth([1,2,3,1,1,2,1,2,3,3,2,4,5,3,1], 3)); // [ 1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5 ]