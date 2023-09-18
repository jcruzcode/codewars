function DNAStrand(dna){
    // Complementary DNA strand
    let complement = '';
    
    // For loop checks each letter of the dna string
    for (let i = 0; i < dna.length; i++) {
      
      // if statements evaluate the complement of each nucleotide
      if(dna[i] === 'A') {
        complement += 'T';
      } else if (dna[i] === 'T') {
        complement += 'A';
      } else if (dna[i] === 'C') {
        complement += 'G';
      } else if (dna[i] === 'G') {
        complement += 'C';
      }
    }
    
    return complement;
  }