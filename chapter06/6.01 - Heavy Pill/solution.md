- There are 20 bottles
- 19 bottles contains 1.0 grams pills
- 1 bottle contains 1.1 grams pills
- Using a single scale, we need to tell which bottle contains the 1.1 grams pills

let pi be the weight of single pill at bottle i
let S2 be the sum of the pills below

```
for i = 1 to 20:
    S2 += i pills from bottle i
```

We get the formula: `W = 1 * p1 + 2 * p2 + ... + 20 * p20`

Suppose all bottles contained 1.0 grams pills, we could calculate W easily with arithmetic sequence sum formula.
Let's call this sum S1

We can now calculate which bottle contained the 1.1 grams pills by subtracting S1 from S2 and dividing by 0.1

That is:
`bottle = (S2 - S1) / 0.1`

We divide by 0.1 because that is the difference between the weights
