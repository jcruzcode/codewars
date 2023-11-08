// 6 kyu - Highest Scoring Word
function high(x) {
    const scores = [];
    const words = x.split(' ');

    for (let word of words) {
        scores.push(wordScore(word));
    }

    const highScore = Math.max(...scores);
    const wordIndex = scores.indexOf(highScore);

    return words[wordIndex];

}

function wordScore(word) {
    let score = 0;

    for (let i = 0; i < word.length; i++) {
        score += word.charCodeAt(i) - 96;
    }

    return score;
}