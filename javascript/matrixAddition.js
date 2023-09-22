// ********* 6 kyu - Matrix Addition ***************
// Write a function that accepts two square matrices 
// (N x N two dimensional arrays), and return the 
// sum of the two.
function matrixAddition(array1, array2){
    let arraySum = [];
    
    for ( let i = 0; i < array1.length; i++ ) 
    {
      let row = [];
  
      for ( let j = 0; j < array1[i].length; j++ ) 
      {
          row.push(array1[i][j] + array2[i][j]);
      }
  
      arraySum.push(row);
    }
    
    return arraySum;
  }