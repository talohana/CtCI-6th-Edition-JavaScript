We know there is at least one blue-eyed person.

Let _c_ be the number of blue-eyed people on the island. We know that _c > 0_.

In this question Base Case and Build is a useful technique.

For c = 1, the single blue eyed person looks around and see no one with blue eyes. He understand that he has blue eyes and leave
the same evening.

For c = 2, two people with blue eyes see another person with blue eyes. They don't know if c = 1 or c = 2, they wait another day.  
If the other blue eyed person does not leave, it means that c = 2 and they both leave.

For c = 3, the technique is the same, every blue eyed person sees 2 other blue eyed people, he is unsure if c = 2 or c = 3.  
He waits 2 days, if they both stay it means c = 3 and they leave on the third night.

We can conclude that for c = n, it takes n days for all blue eyed people to leave.
