function DNAtoRNA(dna) {
    // a function which returns an RNA sequence from the given DNA sequence
    
    let rna = ''; // empty RNA sequence to build off of
    
    // for loop checks each character in the dna string
    for (let i = 0; i < dna.length; i++) {
      if(dna[i] === 'T') {
        rna += 'U'; // Uracil (U) is added to the rna string if Thymine (T) is detected
      } else {
        rna += dna[i]; // Otherwise, the original nucleotide is added to the rna string
      }
    }
    
    return rna; // return the RNA sequence 
  }