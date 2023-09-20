/* 6kyu - The furthest distance of index 

TODO

Given:
1) an array that contains some numbers (arr.length>=2), 
2) positive integer k. 

Find:
two numbers m,n where,
1) m and n at least a difference of k
2) and their index is the most distant

*/
function furthestDistance(arr,k)
{
    let differences = [];

    for ( let i = 0; i < arr.length; i++ ) 
    {
        for ( let j = 0; j < arr.length; j++ )
        {
            if ( i !== j) 
            {
                if ( Math.abs(arr[i] - arr[j]) >= k ) 
                {
                    differences.push([i, j]);
                }
            }
        }
    }
    
    if ( differences.length === 0 )
        return -1;
    else
    {
        let indexDifferences = differences.map( ( item ) => Math.abs(item[0] - item[1])).sort( ( a, b ) => b - a);
        return indexDifferences[0];
    }
    
}

console.log(furthestDistance([8,7,1,9], 100));
