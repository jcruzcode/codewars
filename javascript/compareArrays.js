function comp(array1, array2){
  // return false if either array are null
  if(array1 === null || array2 === null) {
    return false;
  }
  
  // Compare function to use for sorting
  function compareNums(a,b) {
    // if a < b, a - b < 0
    //    a > b, a - b > 0
    //    a = b, a - b = 0 
    return a - b;
  }
  
  // order array2 in ascending order
  array2.sort(compareNums);
  
  // loop through array1, square each element, and assign to squares
  let squares = []; // to add squared elements of array1
  array1.forEach(item => squares.push(item**2));
  
  // order squares in ascending order
  squares.sort(compareNums);
  // loop through array2 and squares to check if each element is equal
  for (let i = 0; i < array2.length; i++) {
    if (squares[i] !== array2[i]) {
      return false;
    }
  }
  
  return true;
}