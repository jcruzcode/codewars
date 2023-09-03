function towerBuilder(nFloors) {
    // Empty array to hold tower
    let tower = [];
    const star = "*"; // star string
    const space = " "; // single space string
    
    // Loop creates a tower of stars without the 
    // needed spaces before and after a given level.
    for (let i = 0; i < nFloors; i++) {
        // Odd number of stars for each level, starting at 1
        let starCount = 2*i + 1; 

        // repeat() method takes a number as input and returns
        // the string referenced and repeats by the number specified
        // then the resulting string is added to tower
        tower.push(star.repeat(starCount));
    }
    
    // Length of last element of tower
    const length = tower[tower.length-1].length;

    // Loop through tower from first element through 
    // the second to last element.
    for (let j = 0; j < tower.length - 1; j++) {
        // Length of j-th element
        let len = tower[j].length;

        //Determine the number of spaces needed 
        // then make a repeated string of spaces
        let spaces = space.repeat( (length - len) / 2 );
        
        // Concatenate spaces before and after the current element in tower
        tower[j] = spaces + tower[j] + spaces; 
    }

    // Return the tower built
    return tower;
}