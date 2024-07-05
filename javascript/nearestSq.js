/*
======== Find Nearest square number (8 kyu) ========
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), 
of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 
111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.),
you need to just return n.

Good luck :)

1) Parameter - An integer
2) Return - The nearest square number to n. Otherwise, return n if its square.
3) Examples - see tests
4) Pseudocode - see comments

*/
function nearestSq(n) {
  const root = Math.sqrt(n);
  const next = Math.ceil(root) ** 2;
  const previous = Math.floor(root) ** 2;
  
  // If n is a perfect square return n
  // If the absolute difference between next and n
  // is smaller than n and previous, return next 
  // otherwise return previous

  return Number.isInteger(root) ? n : next - n < n - previous ? next : previous;
}

// Tests
console.log(nearestSq(1), 1, "nearestSq(1) = 1");
console.log(nearestSq(2), 1, "nearestSq(2) = 1");
console.log(nearestSq(10), 9, "nearestSq(10) = 9");
console.log(nearestSq(111), 121, "nearestSq(111) = 121");
console.log(nearestSq(9999), 10000, "nearestSq(9999) = 10000");
