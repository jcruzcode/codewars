var humanYearsCatYearsDogYears = function(humanYears) {
    // Array for ages
    let ages = [];
    // add humanYears to ages
    ages.push(humanYears);
    
    // For first year conversion
    const firstYear = 15;
    // Second year conversion
    const secondYear = 9
    
    // Declare variables for cat and dog years
    let catYears, dogYears;
    
    // Conditionals to calculate cat and dog years 
    if ( humanYears === 1 ) {
      // Dog and cat years will equal firstYear
      catYears = firstYear;
      dogYears = firstYear;
      
      // add catYears and dogYears to ages
      ages.push(catYears);
      ages.push(dogYears);
      
    } else if( humanYears === 2 ) {
      // Calculate dog and cat years
      catYears = firstYear + secondYear;
      dogYears = firstYear + secondYear;
      
      // add to ages
      ages.push(catYears);
      ages.push(dogYears);
      
    } else if ( humanYears > 2) {
      // Calculate
      catYears = firstYear + secondYear + (humanYears - 2)*4;
      dogYears = firstYear + secondYear + (humanYears - 2)*5;
      
      // Add to ages
      ages.push(catYears);
      ages.push(dogYears);
      
    }
    
    return ages; // return array of ages 
}