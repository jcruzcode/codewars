function stray(numbers) {
    const count = {}; // object to count occurences of numbers
    
    // loop through numbers and count occurences of each number
    for (let number of numbers) {
      count[number] ? count[number] += 1 : count[number] = 1;
    }
    
    // loop through count and return number that occurs 1 time
    for (const key in count) {
      if(count[key] === 1) {
        return Number(key); // convert String to Number
      }
    }
  }