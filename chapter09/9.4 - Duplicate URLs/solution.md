## Info

1. We have 10 billion URLs.
2. We need to detect the _duplicate documents_
3. Duplication means the urls are identical

## Solution

We have large amount of data, assuming we cannot load all the 10 billion URLs in memory of a single machine.

We first need to understand more deeply what duplicate urls actually means. Do we count query params as different urls? because if they are unused some pages just ignores them.

For the purpose of this question I'll assume query params does count, so we differentiate urls by they textual representation.

The absolute brute-force solution of this problem is to go over every url, and search the entire 10 billion dataset of urls for duplicates.

We can improve this. We can leverage the usage of _MapReduce_.

- Map - we can map each url to a pair of `<key, value>` so the key would be the URL, and the value will be set to `1`
- Reduce - For each `key` and given set of `values`, if the sum of the `values` is greater than 1, we have duplicate url.

We should note, if the URL is very long, we could minify it in some way, hashing for example.  
But we must recover from it after the reduce phase, or else we'll get non-readable output.
