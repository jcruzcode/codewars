// Getting MAD (6 kyu)
function gettingMad(array) {
  let mad, currentAd;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      // Check that the indices are not equal
      if (i !== j) {
        // Minimum absolute difference (MAD)
        // is zero when values are equal
        if (array[i] === array[j]) return 0;

        if (!mad) {
          // Compute and set MAD if it is undefined
          mad = Math.abs(array[i] - array[j]);
        } else {
          // Compute current absolute difference 
          currentAd = Math.abs(array[i] - array[j]);
          // Set MAD to current absolute difference
          // if less than current value of MAD
          if (currentAd < mad) mad = currentAd;
        }
      }
    }
  }

  return mad;
}
