function squareSum(numbers){
  // return the sum of each number in numbers squared
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue**2, 0);
}