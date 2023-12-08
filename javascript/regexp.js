// Regex Password Validation (5 kyu)
/*
    ^: Asserts the start of the string.
    (?=.*[a-z]): Positive lookahead to ensure the presence of at least one lowercase letter.
    (?=.*[A-Z]): Positive lookahead to ensure the presence of at least one uppercase letter.
    (?=.*\d): Positive lookahead to ensure the presence of at least one digit.
    (?!.*[_]): Negative lookahead to ensure that the password does not contain an underscore.
    \w{6,}: Matches any word character (alphanumeric + underscore) at least 6 times.
    $: Asserts the end of the string.
*/
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[_])\w{6,}$/;