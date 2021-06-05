## Info

1. We need to design _data structures_ for a very large social network (like Facebook)
2. How would you design an algorithm to show the shortest path between two people?

## Solution

1. We can store the data in database, each `User` has an `id`, `name` and `friend_list`.
2. We can use the data in SQL or NoSQL database. Using NoSQL database means fewer joins.
3. Assuming we are using NoSQL database, we can start from `target` user, and run BFS until we reach the `destination` user or none.

The following issues can rise with the above algorithm

1. What if we can't store all the users in memory? Maybe we should use some cache, like _Redis_.
2. What if there is no connection at all between the two? would we search the entire graph?

The last issue is more concerning. We can for example to run BFS from both side of the source and the target simultaneously, notice the graph is not directed.

We then can stop whenever there is a _collision between the paths_. How we detect collision? we can mark each node if we can from `destination` or `target` and stop whenever we "saw" a node from the opposite side.
