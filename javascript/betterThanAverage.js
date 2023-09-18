/* 8 kyu - How good are you really?  */
function betterThanAverage(classPoints, yourPoints) {
    // Calculate total class points and the average score overall
    const totalPoints = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const averageScore = totalPoints / classPoints.length;
    
    return yourPoints > averageScore ? true : false;
    
}