const powerSet = S => {
  if (S.length === 0) return [[]];

  const curr = S.pop();
  const results = powerSet(S);
  S.push(curr);

  const appended = results.map(r => [...r, curr]);

  return [...results, ...appended];
};

// TESTS

const S1 = ['a', 'b', 'c'];
console.log(JSON.stringify(S1), powerSet(S1));
