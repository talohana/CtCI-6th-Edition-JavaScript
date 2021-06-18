## Step 1: Understand the Scenario

We are given the following code:

```c++
unsigned int i;

for(i = 100; i >= 0; --i) {
    printf("%d\n", i)
}
```

Above the surface, the code looks like a count-down loop, where on every iteration we print `i` and decrease it by `1` until it reaches a negative number.

In the above code the loop doesn't stop.

## Step 2: Break Down the Problem

`i` is defined as `unsigned int`, which ranges only from 0 to 2^32 (4 bytes according to c++). Therefore `i` will _never_ be negative.

## Step 3: Create Specific, Manageable Tests

To ensure the code print all the numbers from 100 to 1 we can change the for loop condition to `i > 0`.

We also can change the `printf` to use `%u` for `unsigned int` rather than `%d`
