// Count Repeats (6 kyu)
function countRepeats(str) {
  const counts = {};
  const seen = [];
  let previous;

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      counts[str[i]] = 1;
    } else {
      if (str[i] === previous) {
        counts[str[i]] += 1;
      } else {
        if (!seen.includes(str[i])) {
          counts[str[i]] = 1;
        }
      }
    }
    previous = str[i];
    seen.push(previous);
  }

  let total = 0,
    remove;

  for (let key in counts) {
    if (counts[key] > 1) {
      remove = counts[key] - 1;
      total += remove;
    }
  }

  return total;
}
