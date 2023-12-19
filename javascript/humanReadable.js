// Human Readable Time (5 kyu)
function humanReadable(seconds) {
    let secs = seconds;
    let hours, mins;

    hours = Math.trunc(secs / 3600); // 1 hr = 3600s
    secs -= hours * 3600; // update seconds remaining

    mins = Math.trunc(secs / 60); // 1 min = 60 s
    secs -= mins * 60; // update seconds remaining

    const times = [String(hours), String(mins), String(secs)];

    for (let i = 0; i < times.length; i++) {
        // Pad with a leading zero if a single digit
        if (times[i].length < 2) times[i] = times[i].padStart(2, '0');
    }

    return times.join(':');
}
console.log(humanReadable(0) === '00:00:00', 'humanReadable(0)');
console.log(humanReadable(59) === '00:00:59', 'humanReadable(59)');
console.log(humanReadable(60) === '00:01:00', 'humanReadable(60)');
console.log(humanReadable(90) === '00:01:30', 'humanReadable(90)');
console.log(humanReadable(3599) === '00:59:59', 'humanReadable(3599)');
console.log(humanReadable(3600) === '01:00:00', 'humanReadable(3600)');
console.log(humanReadable(45296) === '12:34:56', 'humanReadable(45296)');
console.log(humanReadable(86399) === '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(86400) === '24:00:00', 'humanReadable(86400)');
console.log(humanReadable(359999) === '99:59:59', 'humanReadable(359999)');