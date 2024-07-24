/*
======= Growth of a Population (7 kyu) =======
In a small town the population is p0 = 1000 at the beginning of a year. 

The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 

How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.

More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10

Note:

    Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

    There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.

1) Parameters - Four numbers: 
                            - The initial population, p0
                            - percent population growth per year, percent
                            - The number of inhabitants coming or leaving each year, aug
                            - population to meet or surpass, p
2) Return - The number of years needed to reach population p.
3) Examples - see tests
4) Pseudocode - see comments

*/
export const nbYear = (p0:number, percent:number, aug:number, p:number): number => {
    let population = p0, count = 0;
    // Count the number of years it will take for the population to reach or surpass
    // the target population, p.
    while (population < p) {
      count++;
      population = Math.floor(population * (1 + (percent / 100)) + aug);
    }
    
    return count;
}

// Tests
console.log(nbYear(1500, 5, 100, 5000           ), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000 ), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000 ), 94);
console.log(nbYear(1500000, 0.25, -1000, 2000000), 151);