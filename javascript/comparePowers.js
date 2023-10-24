// 6 kyu - Compare Powers
function comparePowers(n1, n2) {
  const num1 = n1[1] * Math.log10(n1[0]);
  const num2 = n2[1] * Math.log10(n2[0]);

  if (num1 > num2) {
    return -1;
  } else if (num1 === num2) {
    return 0
  } else {
    return 1;
  }
}