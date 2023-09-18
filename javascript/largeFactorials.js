/* 4 kyu - Large Factorials  */
function factorial(n) {
    if (n < 0) return null;

    // Initialize result to "1"
    let result = "1";

    // A helper function to multiply a large number (as a string) by a smaller number
    function multiply(numStr, multiplier) {
        let carry = 0;
        let result = "";

        // Multiply each digit of the large number starting from the least significant digit
        for (let i = numStr.length - 1; i >= 0; i--) {
            let temp = parseInt(numStr[i]) * multiplier + carry;
            result = (temp % 10) + result;
            carry = Math.floor(temp / 10);
        }

        // If there's any carry left, prepend it to the result
        while (carry > 0) {
            result = (carry % 10) + result;
            carry = Math.floor(carry / 10);
        }

        return result;
    }

    for (let i = 2; i <= n; i++) {
        result = multiply(result, i);
    }

    return result;
}
