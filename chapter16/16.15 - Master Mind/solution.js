function buildFrequencyTable(phrase) {
  const frequency = {};

  for (let i = 0; i < phrase.length; i++) {
    const char = phrase[i];

    if (char in frequency) {
      frequency[char] += 1;
    } else {
      frequency[char] = 1;
    }
  }

  return frequency;
}

function masterMind(guess, solution) {
  if (!guess || !solution || guess.length !== solution.length) {
    throw Error('Invalid Input');
  }

  let hits = 0;
  let pseudoHits = 0;
  const solutionFrequency = buildFrequencyTable(solution);
  const guessFrequency = buildFrequencyTable(guess);

  // Count Hits
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === solution[i]) {
      hits += 1;
      solutionFrequency[guess[i]] -= 1;
      guessFrequency[guess[i]] -= 1;
    }
  }

  Object.entries(guessFrequency).forEach(([char, count]) => {
    if (char in solutionFrequency) {
      pseudoHits += Math.min(solutionFrequency[char], count);
    }
  });

  return { hits, pseudoHits };
}

// TESTS

console.log(masterMind('RGGB', 'RGRG'));
console.log(masterMind('YYYY', 'BBBB'));
console.log(masterMind('YYBB', 'BBYY'));
