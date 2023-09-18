/* 8 kyu - Will there be enough space? */
function enough(cap, on, wait) {
    // Return 0
    // if the number of people waiting is less than
    // or equal the number of people that can fit on the bus
    // Otherwise, return the number people that can't fit on the bus
    return wait <= ( cap - on ) ? 0 : wait - ( cap - on ); 
}