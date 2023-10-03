// 7 kyu - Beginner Series #3 Sum of Numbers
function getSum(a, b)
{
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  let numbers = [];
  
  for ( let i = start; i <= end; i++ ) {
    numbers.push(i);
  }
  
  return numbers.reduce( ( accumulator, currentValue ) => accumulator + currentValue, 0);
}