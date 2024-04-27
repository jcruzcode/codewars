/*
======== Define a card suit (8 kyu) ========
You get any card as an argument.

Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

1) Parameters - A string with a number or letter (A,2-10,J,Q,K) and suit
                character (♣, ♦, ♥, ♠).
2) Return  - The suit as a lowercase string.
3) Examples - see tests
4) Pseudocode - see comments

*/
function defineSuit(card) {
  // Map suit character to lowercase word
  const suits = {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades",
  };

  for (let suit in suits) {
    // Check which suit the card is and return it as a lowercase word
    if(card.includes(suit)) return suits[suit];
  }
}

// Tests
console.log(defineSuit('3♣'),     'clubs');
console.log(defineSuit('3♦'),  'diamonds');
console.log(defineSuit('3♥'),    'hearts');
console.log(defineSuit('3♠'),    'spades');