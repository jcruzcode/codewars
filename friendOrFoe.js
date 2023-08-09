function friend(friends){
    // Array method - filter
    
    // The array method creates a shallow copy of the array
    // friends with elements that pass the test posed by the
    // arrow function argument.
    
    // If a person in friends has a name with a length of 4,
    // then they are your friend and added to the array.
    
    // return the array of friends
    return friends.filter(person => person.length === 4 );
  }