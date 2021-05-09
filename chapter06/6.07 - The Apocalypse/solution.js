/* 
    The probability of having a girl and a boy is equal = 0.5

    We can denote the probabilities of a family, B represents a boy, G represents a girl.
    G
    BG
    BBG
    BBBG
    ...

    The probabilities of the sequences are: 1/2, 1/4, 1/8 ...

    This can be approached in a mathematical way, this is the sum of i = 0 to infinity of i / [2 ^ (i + 1)]
    This is "very close" to one, meaning the gender ratio is "almost" one, thus there are around the same number
    of boys and girls.

    Another approach is to represents all the families as a big long string of Bs ang Gs.
    Each family is separated by a G (since it has a girl and it can stop having children). But this is irrelevant.
    Given the sequence BBGBB what is the probability of having G? 0.5, so the probability of having girl and a boy is the same
    which means there are roughly the same amount of boys and girls
 */

const theApocalypse = (n) => {
  let boys = 0;
  let girls = 0;

  for (let i = 0; i < n; i++) {
    while (Math.random() < 0.5) boys++;
    girls++;
  }

  console.log(girls / (girls + boys));
};

theApocalypse(1000);
