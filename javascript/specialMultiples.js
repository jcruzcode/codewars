function countSpecMult(n, mxval) {
    let count = 0;
    let product = productOfPrimes( n );

    for ( let i = product; i < mxval; i += product ) {
        count++;
    }

    return count;

    function isPrime( number ) {
        for ( let i = 2; i <= Math.sqrt( number ); i++ ) {
            if ( number % i === 0 ) {
                return false;
            }
        }

        return true;
    }

    function productOfPrimes( count ) {
        let product = 1;
        let num = 2;
        let counter = 0;

        while ( counter < count ) {
            if ( isPrime( num ) ) {
                product *= num;
                counter++;
            }
            num++;
        }
        
        return product;
    }

}

console.log(countSpecMult(3, 200));
