function stringSuffix(s) {
    let suffixes = [];
    let similarTotal = 0;

    for ( let i = 0; i < s.length; i++ ) 
    {   
        suffixes.push(s.slice(i, s.length)); 
    }

    for ( let j = 0; j < suffixes.length; j++ ) 
    {
        if ( s[0] !== suffixes[j][0])
        {
            continue;
        } 
        else 
        {
            for ( let k = 0; k < suffixes.length; k++ ) 
            { 
                if ( s[k] === suffixes[j][k] ) 
                {
                    similarTotal++;
                } 
                else
                    break;
            }
        }

    }

    return similarTotal;

}

console.log(stringSuffix('ababaa'));