## Step 1: Define the test cases

We test the method `boolean canMoveTo(int x, int y)` of a chess `Piece` class.

The tests need to consider 3 aspects

1. The input - x and y coordinates
2. The `Piece` we are testing - King, Queen, Rooks etc
3. The `Board` state - where are other pieces placed in a valid way (no two pieces in the same spot etc)

Can we test _every Piece_ with _every coordinate_ and in _any Board state_?  
With enough resources and time we probably can, but can we do some selective testing instead?

## Step 2: Define the expected results

From the aspects listed above, we expect that by calling a certain `Piece` to move to x and y coordinates on a given `Board`, the function will return `true` if it is a valid move, otherwise return `false`.

## Step 3: Write test code

Since it will probably won't be feasible to tests _every_ combination, we will need to _prioritize_ the testing cases.

We will need to consider _normal_ cases and more _extreme_ cases.

A normal case would be:

1. Trying to move a piece to a valid place
2. Trying to move a piece in a way it cannot move, for example move rook diagonally

An extreme case would be:

1. Trying to move a piece on top of another piece
2. Trying to move a piece out of the board
3. Using negative numbers for x and y coordinates
