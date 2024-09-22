/*
======== L1: Bartender, drinks! (8 kyu) ========
Complete the function that receives as input a string, and produces outputs according to the following table:
Input               Output
"Jabroni" 	        "Patron Tequila"
"School Counselor" 	"Anything with Alcohol"
"Programmer" 	    "Hipster Craft Beer"
"Bike Gang Member" 	"Moonshine"
"Politician" 	    "Your tax dollars"
"Rapper" 	        "Cristal"
anything else 	    "Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, 
then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. 

For example, the input "pOLitiCIaN" should still return "Your tax dollars".

1) Parameters - A string, param.
2) Return - A drink, as a string, based on the given profession.
3) Examples - see tests
4) Pseudocode - see comments

*/
function getDrinkByProfession(param) {
  // Mapping of drinks by profession
    const drinks = {
    jabroni: "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal",
  };
  // Check if param is a property in drinks and return the appropriate drink
  return param.toLowerCase() in drinks ? drinks[param.toLowerCase()] : "Beer";
}

// Tests
console.log(getDrinkByProfession("jabrOni") === "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor") === "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer") === "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member") === "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian") === "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(getDrinkByProfession("rapper") === "Cristal", "'Rapper' should map to 'Cristal'");
console.log(getDrinkByProfession("pundit") === "Beer", "'Pundit' should map to 'Beer'");
console.log(getDrinkByProfession("Pug") === "Beer", "'Pug' should map to 'Beer'");
