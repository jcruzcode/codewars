// 6 kyu - Multiplication Table
// Creates a multiplication table based on size

function multiplicationTable(size)  {
    let multiplicationTable = [];
    
    for ( let j = 1; j <= size; j++ )
    {
        let row = [];
        for ( let i = 1; i <= size; i++ )
        {
            row.push(i*j);
        }
        multiplicationTable.push(row);
    }
    
    return multiplicationTable;
}

console.log(multiplicationTable(5));