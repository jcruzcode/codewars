/*
======= Parts of a list (7 kyu) =======
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

    Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
    Each part will be in a string
    Elements of a pair must be in the same order as in the original array.

Examples of returns in different languages:

a = ['az', 'toto', 'picaro', 'zone', 'kiwi'] -->
[['az', 'toto picaro zone kiwi'], ['az toto', 'picaro zone kiwi'], ['az toto picaro', 'zone kiwi'], ['az toto picaro zone', 'kiwi']] 
or
 a = {'az', 'toto', 'picaro', 'zone', 'kiwi'} -->
{{'az', 'toto picaro zone kiwi'}, {'az toto', 'picaro zone kiwi'}, {'az toto picaro', 'zone kiwi'}, {'az toto picaro zone', 'kiwi'}}
or
a = ['az', 'toto', 'picaro', 'zone', 'kiwi'] -->
[('az', 'toto picaro zone kiwi'), ('az toto', 'picaro zone kiwi'), ('az toto picaro', 'zone kiwi'), ('az toto picaro zone', 'kiwi')]
or 
a = [|'az', 'toto', 'picaro', 'zone', 'kiwi'|] -->
[('az', 'toto picaro zone kiwi'), ('az toto', 'picaro zone kiwi'), ('az toto picaro', 'zone kiwi'), ('az toto picaro zone', 'kiwi')]
or
a = ['az', 'toto', 'picaro', 'zone', 'kiwi'] -->
'(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)'

Note

You can see other examples for each language in 'Your test cases'

1) Parameters - An array of strings, arr.
2) Return - A nested array whose elements are all the ways to divide arr into
            two non-empty parts.
3) Examples - see tests
4) Pseudocode - see comments

*/
function partlist(arr) {
  let pairs = [];
  // Give all the ways to divide arr into two non-empty parts as a nested array
  for (let i = 1; i < arr.length; i++) {
    pairs.push([arr.slice(0, i).join(" "), arr.slice(i).join(" ")]);
  }
  return pairs;
}

// Tests
console.log(partlist(["I", "wish", "I", "hadn't", "come"]), [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]);
console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]), [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]);
console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"]), [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]);