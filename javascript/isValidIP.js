/*
====== IP Validation (6 kyu)======
Write an algorithm that will identify valid IPv4 addresses 
in dot-decimal format. IPs should be considered valid if they consist 
of four octets, with values between 0 and 255, inclusive.

1) Parameters - A string of characters representing a possible IP address
2) Return - true if valid IP address, otherwise false
3) Examples - see tests 
4) Psuedocode - see comments
*/

function isValidIP(str) {
    // Check if the string is four octets separated by '.'
    const octets = str.split('.');
    if (octets.length !== 4) return false;

    const digits = ['0','1','2','3','4','5','6','7','8','9'];
    // Loop over octets and check that each only contains digits
    for (let octet of octets) {
        // Check for empty octet string
        if (octet.length === 0) return false;
        
        for (let i = 0; i < octet.length; i++) {
            // Check for leading zeros as well
            if ((i === 0 && octet[i] === '0' && octet.length > 1) 
                || !digits.includes(octet[i])) 
                return false;
        }

        const number = Number(octet);
        // Check if octet is a number between 0 and 255, inclusive
        if (!(number >= 0 && number <= 255)) return false;
    }
    // Otherwise, valid IP address
    return true;
}

console.log(isValidIP("0.0.0.0"        ),  true);
console.log(isValidIP("12.255.56.1"    ),  true);
console.log(isValidIP("137.255.156.100"),  true);
console.log(isValidIP(''               ), false);
console.log(isValidIP('abc.def.ghi.jkl'), false);
console.log(isValidIP('123.456.789.0'  ), false);
console.log(isValidIP('12.34.56'       ), false);
console.log(isValidIP('01.02.03.04'    ), false);
console.log(isValidIP('256.1.2.3'      ), false);
console.log(isValidIP('1.2.3.4.5'      ), false);
console.log(isValidIP('123,45,67,89'   ), false);
console.log(isValidIP('1e0.1e1.1e2.2e2'), false);
console.log(isValidIP(' 1.2.3.4'       ), false);
console.log(isValidIP('1.2.3.4 '       ), false);
console.log(isValidIP('12.34.56.-7'    ), false);
console.log(isValidIP('1.2.3.4\n'      ), false);
console.log(isValidIP('\n1.2.3.4'      ), false)