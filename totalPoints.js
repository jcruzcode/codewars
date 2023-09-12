/* 8 kyu  - Total Amount of Points */
function points(games) {
    // to keep track of our team's points
    let points = 0;
    
    // loop through 'games' and compare scores
    for (let i = 0; i < games.length; i++) {
      let ourScore = games[i][0];
      let oppScore = games[i][games[i].length - 1];
      
      // add to score if we win or tie
      if ( ourScore > oppScore ) {
        points += 3; // win
      } else if ( ourScore === oppScore ){
        points += 1 // tie
      }
    }
    // return how many points scored in championship
    return points;
}