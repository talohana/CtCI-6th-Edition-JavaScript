/* 
    (n & (n - 1)) === 0

    To understand the code above let's look at some examples in their binary and decimal representation

    (0b0 & (0b0 - 1)) === 0 => true for 0
    (0b01 & (0b01 - 1)) === 0 => true for 1
    (0b10 & (0b10 - 1)) === 0 => true for 2
    (0b11 & (0b11 - 1)) === 0 => false for 3
    (0b100 & (0b100 - 1)) === 0 => true for 4

    We can see the term (n & (n - 1)) === 0 will be if the number has 0 or 1 bits set.
    Which actually means that the term will be true only if the input is a power of 2.
 */
