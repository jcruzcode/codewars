// 8 kyu - Get the mean of an array
function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    const sumOfGrades = marks.reduce( (acc, val) => acc + val, 0);
    const numOfStudents = marks.length;
    const averageGrade = Math.floor(sumOfGrades/numOfStudents);
    
    return averageGrade;
  }