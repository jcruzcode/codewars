/*
======= The Office II - Boredom Score (7 kyu) =======
Every now and then people in the office moves teams or departments.

Depending what people are doing with their time they can become more or less boring.

Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'

*/
function boredom(staff) {
  // Mapping of boredom score per department
  const deptScore = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };

  let score = 0;

  // Find which department each staff member belongs to
  // Then use deptScore to calculate the total boredom score
  for (let person in staff) {
    score += deptScore[staff[person]];
  }

  // Return a message based on the total boredom score
  return score <= 80
    ? "kill me now"
    : score >= 100
    ? "party time!!"
    : "i can handle this";
}

// Tests
console.log(boredom({tim: 'change', jim: 'accounts',
  randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  mr: 'finance' }) === 'kill me now');
console.log(boredom({ tim: 'IS', jim: 'finance',
  randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
  katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
  alex: 'regulation', john: 'accounts', mr: 'canteen' }) === 'i can handle this');
console.log(boredom({ tim: 'accounts', jim: 'accounts',
  randy: 'pissing about', sandy: 'finance', andy: 'change',
  katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
  john: 'retail', mr: 'pissing about' }) === 'party time!!');
