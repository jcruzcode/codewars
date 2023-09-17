/*  8 kyu - Twice as old */
function twiceAsOld(dadYearsOld, sonYearsOld) {
    // Calculate double the age of the son
    const doubleSonAge = sonYearsOld * 2;
    // Find the age difference btween the dad's age and double the son's age
    // Then take the absolute value of the difference
    const absoluteAgeDifference = Math.abs(dadYearsOld - doubleSonAge);
    
    return absoluteAgeDifference;
  }