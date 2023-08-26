function isValidWalk(walk) {
    // Return false if walk length is not 10
    // This means the walk will be shorter or longer than 10 minutes
    if (walk.length !== 10) {
      return false;
    }
    
    // Create object called walker
    
    // Object has position properties: 
    // vertical (north and south) and horizontal (east and west)
    
    // Object can walk: 
    // North, South, East, and West by one block each time the method is called
    let walker = {
      verticalPosition: 0, // walker vertical position is zero to start
      horizontalPosition: 0, // walker horizontal position is starts at zero
      
      // Take one step north and increment vertical position
      walkNorth() {
        this.verticalPosition++;
      },
      
      // Take one step south and decrement vertical position
      walkSouth() {
        this.verticalPosition--;
      },
      
      // Take one step east and increment horizontal position
      walkEast() {
        this.horizontalPosition++;
      },
      
      // Take one step west and decrement horizontal position
      walkWest() {
        this.horizontalPosition--;
      },
      
    };
    
    // Loop through the walk array and examine each element to 
    // determine which direction to walk
    walk.forEach(element => {
      switch (element) {
          case 'n':
            walker.walkNorth();
            break;
          case 'e':
            walker.walkEast();
            break;
          case 's':
            walker.walkSouth();
            break;
          case 'w':
            walker.walkWest();
            break;
      }
    })
    
    // return true if walker starts where he or she begins (and only takes 10 mins, evaluated previously)
    return walker.horizontalPosition === 0 && walker.verticalPosition === 0 ? true : false; 
  }