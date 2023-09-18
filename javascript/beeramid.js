// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
    // If bonus is less than price, then you can't buy any beer and
    // complete beeramid levels is 0.
    if (bonus < price) {
      return 0;
    }
    
    // Calculate the number of beers that can be purchase and round down to nearest integer.
    let numBeers = Math.floor(bonus/price);
    // Start at level 1
    let level = 1; 
    
    while (numBeers >= 0) { // While numBeers is not negative
      // Subtract the number of beers at the current level from numBeers and reassign.
      numBeers -= level**2;
      
      
      if (numBeers < (level + 1)**2) {
        // Return the current level if numBeers is less than the number of beers at the next level.
        return level; 
      } else {
        // Otherwise, another level can be made and increment level by 1
        level++; 
      }
    }
    
  }