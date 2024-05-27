/*
====== Ideal electron distribution (6 kyu) ======
You are a khmmadkhm scientist and you decided to play with electron distribution 
among atom's shells. 

You know that basic idea of electron distribution is that electrons should fill 
a shell until it's holding the maximum number of electrons.

Rules:

    Maximum number of electrons in a shell is distributed with a rule of 2n^2 
    (n being position of a shell).
    For example, maximum number of electrons in 3rd shell is 2*3^2 = 18.
    Electrons should fill the lowest level shell first.
    If the electrons have completely filled the lowest level shell, the other 
    unoccupied electrons will fill the higher level shell and so on.

Ex.:    atomicNumber(1); should return [1]
        atomicNumber(10); should return [2, 8]
        atomicNumber(11); should return [2, 8, 1]
        atomicNumber(47); should return [2, 8, 18, 19]

1) Parameters - An integer, num, representing the number of electrons in a neutral
                atom with atomic number num.
2) Return - An array of integers representing the number of electrons in each
            electron shell.
3) Examples - see tests
4) Pseudocode - see comments

*/
function atomicNumber(num) {
  let shellNum = 1, electrons = num, maxElectrons;
  const shells = [];
  
  while (electrons > 0) {
    // Calculate max number of electrons for current shell
    maxElectrons = 2*(shellNum)**2 
    
    // Check if the total electrons remaining is less than the max number of 
    // electrons for the current shell
    if (electrons < maxElectrons) {
        shells.push(electrons); // Add the number of electrons left to shells
    }  else  {
        shells.push(maxElectrons); // Add the max number of electrons allowed 
    }
    // Calculate the remaining electrons by subtracting the max electrons for
    // current shell
    electrons -= maxElectrons;
    shellNum++; // Increment to get next shell number
  }
  
  return shells;
}

// Tests
console.log(atomicNumber(1),                [1])                
console.log(atomicNumber(10),            [2, 8])            
console.log(atomicNumber(11),         [2, 8, 1])         
console.log(atomicNumber(22),        [2, 8, 12])        
console.log(atomicNumber(23),        [2, 8, 13])        
console.log(atomicNumber(47),    [2, 8, 18, 19])    
console.log(atomicNumber(50),    [2, 8, 18, 22])    
console.log(atomicNumber(52),    [2, 8, 18, 24])    
console.log(atomicNumber(60),    [2, 8, 18, 32])    
console.log(atomicNumber(61), [2, 8, 18, 32, 1]) 