function filter_list(list) {
    // The filter() method of Array instances creates a shallow copy of a portion of a given array, 
    // filtered down to just the elements from the given array that pass the test implemented by the provided function.
    // Return a new array with the strings filtered out
    return list.filter(item => Number.isInteger(item));
  }