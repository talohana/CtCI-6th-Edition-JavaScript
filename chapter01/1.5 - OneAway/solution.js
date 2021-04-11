// O(n) time complexity and O(1) space complexity
const oneWay = (s1, s2) => {
  if (s1.length === s2.length) {
    return oneEditReplace(s1, s2);
  } else if (s1.length + 1 === s2.length) {
    return oneEditInsert(s1, s2);
  } else if (s1.length - 1 === s2.length) {
    return oneEditInsert(s2, s1);
  }
};

const oneEditReplace = (s1, s2) => {
  let foundDifference = false;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (foundDifference) return false;
      foundDifference = true;
    }
  }

  return true;
};

const oneEditInsert = (s1, s2) => {
  let index1 = 0;
  let index2 = 0;

  while (index1 < s1.length && index2 < s2.length) {
    if (s1[index1] !== s2[index2]) {
      // since we already found difference by increasing index2 by one
      if (index1 !== index2) return false;
      index2++; // mimics the insertion of the missing character
    } else {
      index1++;
      index2++;
    }
  }

  return true;
};

// TESTS

console.log("('pale', 'bale')", oneWay('pale', 'bale'));
console.log("('pale', 'bake')", oneWay('pale', 'bake'));
console.log("('pale', 'ple')", oneWay('pale', 'ple'));
console.log("('pale', 'pales')", oneWay('pale', 'pales'));
