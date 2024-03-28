/*
====== Find the most frequently occurring elements in array (6 kyu) ======
Input: A 5-day JSON weather forecast which consist of 5 arrays. Each of the 5 
arrays includes 8 numbers which represent 3-hourly temperature forecast for a 
given day.

Output: An array which includes the most frequent number (temperature) from each 
of the 5 arrays (days). In case there is a tie, return the value present later 
in a given array (day).

Example input:

var forecast_01 = {
   "temperature": [
       [15,17,19,21,21,21,20,16],
       [16,17,22,22,22,22,20,16],
       [12,17,19,20,20,20,20,18],
       [14,15,19,19,20,22,18,17],
       [15,17,24,24,24,20,20,20]
   ]
};

Example output:

getMostFrequent(forecast_01)  // should return [21,22,20,19,20]

Explanation of the example above:

The output is [21,22,20,19,20] because given 5 arrays,
[15,17,19,21,21,21,20,16] 21 is the most frequent in 1st array
[16,17,22,22,22,22,20,16] 22 is the most frequent in 2nd array
[12,17,19,20,20,20,20,18] 20 is the most frequent in 3rd array
[14,15,19,19,20,22,18,17] 19 is the most frequent in 4th array
[15,17,24,24,24,20,20,20] 24 and 20 appear 3 times each in 5th array so 20 is 
included in the output as the last 20 appears later than the last 24.

*/
function getMostFrequent(json) {
  function mostFrequent(arr) {
    const count = {};
    // Count the frequencies of each number in arr
    for (let num of arr) {
      count[num] ? count[num]++ : (count[num] = 1);
    }
    // Sort entries by increasing frequencies
    const sortedCount = Object.entries(count).sort((a, b) => a[1] - b[1]);

    // Filter sortedCount to only items that include the highest frequency
    const highFrequency = sortedCount[sortedCount.length - 1][1];
    const occursMost = sortedCount.filter((item) =>
      item.includes(highFrequency)
    );

    // Return the number if only one entry in occursMost
    if (occursMost.length === 1) return +occursMost[0][0];

    const indices = [];
    // Find the last index of each number in arr of each number in occursMOst
    for (let pair of occursMost) {
      indices.push(arr.lastIndexOf(+pair[0]));
    }
    // Find the highest index in indices and return that number from arr
    indices.sort((a, b) => b - a);
    return arr[indices[0]];
  }

  // Get array of temperatures from JSON object
  const temps = json["temperature"];
  
  // Loop over temps and for each array find the most frequent temperature and 
  // add to frequentTemps
  // If more than one temp has same frequency, find the temp that occurs latest 
  // in the day
  const frequentTemps = [];
  for (let array of temps) {
    frequentTemps.push(mostFrequent(array));
  }

  return frequentTemps;
}

// Tests
const forecast_01 = {
    "temperature": [
      [15,17,19,21,21,21,20,16],
      [16,17,22,22,22,22,20,16],
      [12,17,19,20,20,20,20,18],
      [14,15,19,19,20,22,18,17],
      [15,17,24,24,24,20,20,20]
    ]
}

console.log(getMostFrequent(forecast_01), [21,22,20,19,20]);
