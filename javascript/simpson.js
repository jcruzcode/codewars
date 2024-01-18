/*
====== Simpson's Rule - Approximate Integration (6 kyu) ======

f(x) = (3/2) * sin(x)^3

The task is to write a function called simpson with 
parameter n which returns the value of the integral 
of f on the interval [0, pi] (pi being 3.14159265359...).

We know that the exact value of the integral of f 
on the given interval is 2.

1) Parameters - an even integer, n, greater than 2.
2) Return - The value of the integral of f(x) on the interval
            [0, pi]

            Don't round or truncate your results. 
3) Examples - see tests
4) Pseudocode - see comments

*/

function simpson(n) {
    // Calculate h = (b - a)/n, where a === 0
    const h = Math.PI / n;
    // Calculate the outer coefficient of simpson's rule
    const coeff = h / 3;
    // f(a) === 0 since sin(0) === 0
    // Calculate f(b)
    const f = (angle) => (3 / 2) * ( Math.sin(angle) ** 3 );
    const termB = f(Math.PI);

    // Calculate first riemann sum
    let sum1 = 0;
    for ( let i = 1;  i <= n / 2; i++ ) {
        sum1 += 4 * f((2 * i - 1) * h);
    }

    // Calculate second riemann sum
    let sum2 = 0;
    for ( let i = 1; i <= (n / 2) - 1; i++) {
        sum2 += 2 * f(2*i*h);
    }

    // Approximate the integral of f(x) from [0, pi]
    // using Simpson's rule
    return coeff * ( termB + sum1 + sum2 );
}

// Tests
console.log(simpson(290), 1.9999999986);
console.log(simpson(72), 1.9999996367);
console.log(simpson(252), 1.9999999975);
console.log(simpson(40), 1.9999961668);