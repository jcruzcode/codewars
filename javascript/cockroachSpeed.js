// 8 kyu Beginner Series #4 Cockroach
function cockroachSpeed(s) {
    // Convert km/hr to cm/s
    let speed = (s*100000)/3600;
    // round speed down to nearest integer
    return Math.floor(speed);
}