There are two types of games:

1. You get one shoot to make a hoop
2. You get three shoots and you need to make two hoops

Given a probability p of making a hoop we need to find the values of p where one game
has better chance winning than the other.

For the first game the probability is p, by definition.

For the second game we first need to calculate the probability of winning:
making 2 hoops out of 3 shoots + making 3 hoops out of 3 shoots

There are 2C3 options of making 2 out of 3 hoops, and the probability is _p<sup>2</sup> \* (1-p)_
There is a single option of making 3 hoops out of 3 shoots - p<sup>3</sup>

To summarize the probability of winning at the second game is: _3 \* p<sup>2</sup> \* (1-p) - p<sup>3</sup>_,
which is _-2 \* p<sup>3</sup> + 3 \* p<sup>2</sup>_

We need to calculate _p_ for the inequality:

-2 \* p<sup>3</sup> + 3 \* p<sup>2</sup> < p
