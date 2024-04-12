/*
====== Count addresses grouped by state (6 kyu) ======
Write a function that can take an array of addresses as input, and return an 
array with the count of addresses for each state.

The input objects will have the following structure:

{
  house: 1234,
  street: "Lonely St.",
  city: "Soldotna",
  zipcode: 99669,
  state: "AK"
}

The returned objects must have the following structure:

{
  state: "AK",
  count: 25
}

The states must be ordered by first appearance.

An error is expected if an input object doesn't have a state property.

1) Parameters - An array of address objects. 
2) Return - An array of objects with a count of addresses for each state
3) Examples - see tests
4) Pseudocode - see comments 

*/

function count(addresses) {
  // Return empty array if addresses is empty
  if (addresses.length === 0) return [];

  const stateCounts = {};
  // Verify each address object has a 'state' property
  for (let address of addresses) {
    if (address["state"]) {
      // Count the addresses in each state
      stateCounts[address["state"]]
        ? stateCounts[address["state"]] += 1
        : stateCounts[address["state"]] = 1;
    } else {
      // Throw error if 'state' property doesn't exist
      throw Error("'state' property doesn't exist");
    }
  }

  const addressCounts = [];
  let stateCount= {};
  // Create an array of objects with address counts for each state
  for (let state in stateCounts) {
    stateCount["state"] = state;
    stateCount["count"] = stateCounts[state];
    addressCounts.push(stateCount);
    stateCount = {}; 
  }

  return addressCounts;
}

// Tests
console.log(count([]), []);

console.log(
  count([
    { house: 1, street: "Binary St.", city: "Zero Value", state: "AK" },
    { house: 1, street: "Binary St.", city: "Zero Value", state: "AR" },
    { house: 1, street: "Binary St.", city: "Zero Value", state: "OR" },
    { house: 1, street: "Binary St.", city: "Zero Value", state: "CA" },
    { house: 1, street: "Binary St.", city: "Zero Value", state: "AK" },
    { house: 1, street: "Binary St.", city: "Zero Value", state: "OR" },
    { house: 1, street: "Binary St.", city: "Zero Value", state: "OR" },
  ]),
  [
    {
      state: "AK",
      count: 2,
    },
    {
      state: "AR",
      count: 1,
    },
    {
      state: "OR",
      count: 3,
    },
    {
      state: "CA",
      count: 1,
    },
  ]
);

// Should throw error
console.log(count([{ state: "AK" }, { name: "Mister" }]));
