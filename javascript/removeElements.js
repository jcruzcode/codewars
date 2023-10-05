 // 8 kyu - Removing Elements
 function removeEveryOther(arr){
    let keptElements = [];
    
    for ( let i = 0; i < arr.length; i++ ) {
      if ( i % 2 === 0 )
        keptElements.push(arr[i]);
    }
    
    return keptElements;
}