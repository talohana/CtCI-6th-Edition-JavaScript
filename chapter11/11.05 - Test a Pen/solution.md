## Step 1: Who will use it? And why?

We first need to understand exactly what _kind_ of pen are we testing. It is Ballpoint pen? Fountain pen? etc

Then we need the specs of the pen, what kind of ink is loaded and what colors available.

Next, we need to identify the regular user and the extreme user.

**For this question I'll assume we are testing a simple ballpoint pen.**

## Step 2: What are the use cases?

We want to write with the pen in smooth and understandable manner, in different angles of writing.

The tests should be run on different types of papers.

## step 3: What are the bounds of use?

Consider with the interviewer for how long the ink should be good, how much times can we toggle the pen and how do we identify "smooth and understandable" writing.

## Step 4: What are the stress / failure points?

There are multiple failure and stress points for the pen

1. Toggling a lot of times
2. Pushing the pen too hard into the paper
3. Writing on non-suitable papers
4. Dropping the pen and damaging it

## Step 5: What are the test cases? How would you perform the testing?

At the first step, we'll do manual testing for the following aspects

1. Different people with different hand sizes should hold the pen and rate how comfortable it is
2. How hard is it to push the pen trigger
3. How smooth and understandable their writing in comparison with baseline (writing with other pen)

Then we will need to automate other aspects

1. Have a machine to auto-trigger the pen to see how many time it can trigger successfully
2. Pushing the pen to see how much resistance does it have
