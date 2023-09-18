// 6 kyu - Two Sum

/*

  Function takes an array of numbers (integers for the tests) and a target number. 
  It finds two different items in the array that, when added together, give the 
  target value. The indices of these items should then be returned as an array.
  
*/

function twoSum(numbers, target) {
    let answers = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (j !== i) {
                let sum = numbers[i] + numbers[j];

                if (sum === target) {
                    answers[0] = i;
                    answers[1] = j;
                }
            }
        }
    }

    return answers;
}
console.log(twoSum([1,2,3], 4));
