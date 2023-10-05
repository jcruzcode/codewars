// 6 kyu - More Zeros than Ones
function moreZeros(str) {
    // Loop through each char in s
    // For each char
    // 1) convert char to utf-16 code
    // 2) convert utf-16 code to binary
    // 3) add binary number to an array
    let binNums = [];
    let code, binary;

    for ( let i = 0; i < str.length; i++ ) {
        code = str.charCodeAt(i);
        binary = code.toString(2);
        binNums.push(binary);
    }

    // Loop through array of binary numbers
    // For each binary number
    // 1) count the number of 1's 
    // 2) count the number of 0's
    // 3) if number of 0's > numbers of 1's
    //       push the char at the same index to a new array

    let oneCount;
    let zeroCount;
    let chars = [];

    for ( let j = 0; j < binNums.length; j++ ) {
        oneCount = 0;
        zeroCount = 0;

        for ( let k = 0; k < binNums[j].length; k++ ) {
            binNums[j][k] == 1 ? oneCount++ : zeroCount++;
        }


        if ( zeroCount > oneCount )
            chars.push(str[j]);
    }

    
    //  remove any duplicate characters, keeping the first 
    //  occurrence of any such duplicates, so they are in 
    //  the same order in the final array as they first 
    //  appeared in the input string.

    let noDuplicates = [];

    for ( let char of chars ) {
        if ( !noDuplicates.includes(char) )
            noDuplicates.push(char);
    }

    return noDuplicates;

}



let binaries = moreZeros('DIGESTING');
console.log(binaries);

