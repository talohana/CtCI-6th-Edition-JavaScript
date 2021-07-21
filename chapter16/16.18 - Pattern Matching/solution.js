function countOf(value, char) {
  const regexp = new RegExp(char, 'g');

  return value.match(regexp).length;
}

function buildFromPattern(pattern, main, alt) {
  const first = pattern[0];
  const builder = [];

  for (let i = 0; i < pattern.length; i++) {
    builder.push(pattern[i] === first ? main : alt);
  }

  return builder.join('');
}

function doesMatch(pattern, value) {
  if (pattern.length === 0) return value.length === 0;

  const mainChar = pattern[0];
  const altChar = mainChar === 'a' ? 'b' : 'a';
  const size = value.length;

  const countOfMain = countOf(pattern, mainChar);
  const countOfAlt = pattern.length - countOfMain;
  const firstAlt = pattern.indexOf(altChar);
  const maxMainSize = Math.floor(size / countOfMain);

  for (let mainSize = 0; mainSize <= maxMainSize; mainSize++) {
    const remainingLength = size - countOfMain * mainSize;
    const first = value.slice(0, mainSize);

    if (countOfAlt === 0 || remainingLength % countOfAlt === 0) {
      const altIndex = firstAlt * mainSize;
      const altSize = countOfAlt === 0 ? 0 : remainingLength / countOfAlt;
      const second =
        countOfAlt === 0 ? '' : value.slice(altIndex, altIndex + altSize);

      const candidate = buildFromPattern(pattern, first, second);

      if (candidate === value) {
        return true;
      }
    }
  }

  return false;
}

// TESTS

console.log('catcatgocatgo', 'aabab', doesMatch('aabab', 'catcatgocatgo'));
console.log('catcatgocatgo', 'aababb', doesMatch('aababb', 'catcatgocatgo'));
console.log('catcatgocatgo', 'a', doesMatch('a', 'catcatgocatgo'));
console.log('catcatgocatgo', 'ab', doesMatch('ab', 'catcatgocatgo'));
