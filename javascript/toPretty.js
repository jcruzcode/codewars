/*
====== Pretty Date (6 kyu) =======
Write a helper function that accepts an argument (number of seconds) and converts it to a more human-readable format. You need only go up to '_ weeks ago'.

toPretty(0) => "just now"

toPretty(40000) => "11 hours ago"

Specifics

    - The output will be an amount of time, t, included in one of the following phrases: "just now", "[t] seconds ago", "[t] minutes ago", "[t] hours ago", "[t] days ago", "[t] weeks ago".
    
    - You will have to handle the singular cases. That is, when t = 1, the phrasing will be one of "a second ago", "a minute ago", "an hour ago", "a day ago", "a week ago".
    
    - The amount of time is always rounded down to the nearest integer. For example, if the amount of time is actually 11.73 hours ago, the return value will be "11 hours ago".
    
    - Only times in the past will be given, with the range "just now" to "52 weeks ago"

1) Parameters - A non-negative integer that represents an amount of time in the past
2) Returns - A string showing the amount of time in a "pretty" format. See "Specifics" above.
3) Examples - see test cases
4) Pseudocode - see comments

*/

function toPretty(seconds){
    // Zero time passed
    if(seconds === 0) { 
        return "just now"
    } else if (seconds < 60) {
    // Less than a minute passed
        // Case - Exactly one second passed
        if (seconds === 1) return "a second ago"
        return `${seconds} seconds ago`;
    } else if (seconds < 3600) {
    // Less than an hour passed
        // Case - Exactly one minute passed
        if (seconds >= 60 && seconds < 120) return "a minute ago";
        // Calculate the number of minutes rounded down to nearest minute
        return `${Math.floor(seconds / 60)} minutes ago`;
    } else if (seconds < 86400) {
    // Less than a day passed
        // Case - Exactly one hour passed
        if (seconds >= 3600 && seconds < 7200) return "an hour ago";
        // Calculate the number of hours passed rounded down to near hour
        const hours = Math.floor(seconds / 3600);
        return `${hours} hours ago`;
    } else if (seconds < 604800) {
    // Less than a week passed
        // Case - Exactly one day passed
        if (seconds >= 86400 && seconds < 172800) return "a day ago";
        // Calculate the number of days passed rounded down to nearest day
        const days = Math.floor(seconds / 86400);
        return `${days} days ago`;
    } else {
    // At least a week has passed
        // Case - Exactly one week has passed
        if (seconds >= 604800 && seconds < 1209600) return "a week ago";
        // Calculate number of weeks rounded down to nearest week
        const weeks = Math.floor(seconds / 604800);
        return `${weeks} weeks ago`;

    }

}

// Test cases
console.log(toPretty(0) === "just now");

console.log(toPretty(1) === "a second ago");
console.log(toPretty(45) === "45 seconds ago");

console.log(toPretty(60) === "a minute ago");
console.log(toPretty(3001) === "50 minutes ago")

console.log(toPretty(40000) === "11 hours ago");
console.log(toPretty(82800) === "23 hours ago");

console.log(toPretty(86400) === "a day ago");
console.log(toPretty(518400) === "6 days ago");

console.log(toPretty(604800) === "a week ago");
