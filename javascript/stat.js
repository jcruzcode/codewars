// Statistics for an Athletic Association (6 kyu)
function stat(str) {
    // Case of empty str
    if (str === "") return "";

    // Split str into array of individual times
    const times = str.split(', ');

    let runnerTimes = [], tmp;

    for (let i = 0; i < times.length; i++) {
        // For each runner time, split hr|min|sec
        // into an array and convert each time
        // string into a number
        tmp = times[i].split('|').map(x => +x);
        runnerTimes.push(tmp);
    }

    const seconds = convertToSeconds(runnerTimes).sort((a, b) => a - b);

    const range = formatTime(seconds[seconds.length - 1] - seconds[0]);

    const calcMean = seconds.reduce((acc, val) => acc + val, 0) / seconds.length;
    const mean = formatTime(calcMean);

    let median;

    if (seconds.length % 2 !== 0) {
        // for odd lengths
        median = formatTime(seconds[(seconds.length - 1) / 2]);
    } else {
        // for even lengths
        const avg = (seconds[Math.floor((seconds.length - 1) / 2)] +
            seconds[Math.ceil((seconds.length - 1) / 2)]) / 2
        median = formatTime(avg);
    }

    return `Range: ${range} Average: ${mean} Median: ${median}`;
}

// Convert an array of times formatted in [hr, min, sec]
// to an array of times in seconds.
function convertToSeconds(arr) {
    let seconds;
    const times = [];

    for (let i = 0; i < arr.length; i++) {
        seconds = 0;

        for (let j = arr[i].length - 1; j >= 0; j--) {
            if (j === 0) {
                seconds += 3600 * arr[i][j];
            } else if (j === 1) {
                seconds += 60 * arr[i][j];
            } else {
                seconds += arr[i][j];
            }
        }

        times.push(seconds);
    }

    return times;
}

// Take an input in seconds and return the time
// formated hr|min|sec as a string with, two 
// digits per number
function formatTime(seconds) {
    let secs = seconds;
    const times = [];

    const hours = Math.floor(secs / 3600);
    secs -= hours * 3600;
    times.push(String(hours));

    const minutes = Math.floor(secs / 60);
    secs -= minutes * 60;
    times.push(String(minutes));
    times.push(String(Math.floor(secs)));

    let tmp;

    for (let i = 0; i < times.length; i++) {
        if (times[i].length < 2) {
            tmp = times[i].padStart(2, '0');
            times[i] = tmp;
        }
    }

    return times.join('|');
}