class Person {
  constructor(birth, death) {
    this.birth = birth;
    this.death = death;
  }
}

function maxLivingYear(people, min, max) {
  const sortedBirths = people.map(({ birth }) => birth).sort((a, b) => a - b);
  const sortedDeaths = people.map(({ death }) => death).sort((a, b) => a - b);

  let birthIndex = 0;
  let deathIndex = 0;
  let currentLivingPeople = 0;
  let maxLivingPeople = 0;
  let maxYear = 0;

  while (birthIndex < sortedBirths.length) {
    if (sortedBirths[birthIndex] <= sortedDeaths[deathIndex]) {
      currentLivingPeople++;
      if (currentLivingPeople > maxLivingPeople) {
        maxLivingPeople = currentLivingPeople;
        maxYear = sortedBirths[birthIndex];
      }
      birthIndex++;
    } else {
      currentLivingPeople--;
      deathIndex++;
    }
  }

  return min + maxYear;
}

// TESTS

const people = [
  new Person(1, 9),
  new Person(7, 12),
  new Person(10, 15),
  new Person(90, 100),
  new Person(60, 70),
  new Person(0, 13),
];

console.log(maxLivingYear(people, 1900, 2000));
