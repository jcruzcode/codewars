function abbrevName(name){
    // Split name and store first and last name in an array
    let names = name.split(' ');
    let initials = ''; // empty string for initials
    
    // loop through each element in names
    for (let i = 0; i < names.length; i++) {
      if (i === 0){ 
        // Include a period after the first initial
        initials = initials + names[i][0].toUpperCase() + '.';
      } else {
        // Otherwise, omit period after initial
        initials += names[i][0].toUpperCase();
      }
    }
    // return initials capitalized and separated by a period '.'
    return initials;
  }