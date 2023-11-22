// Bouncing Balls (6 kyu)
function bouncingBall(h, bounce, window) {
    if (!(h > 0 && bounce > 0 && bounce < 1 && window < h)) {
        return -1;
    }

    let bounceHeight = h * bounce, count = 0;

    while (bounceHeight > window) {
        count++;
        bounceHeight *= bounce;
    }


    return 2 * count + 1;
}

console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);
console.log(bouncingBall(3.0, 1.0, 1.5), -1);