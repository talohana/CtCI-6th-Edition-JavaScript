## Info

1. We are designing a web server for simplified search engine
2. We have 100 machines to respond to _search queries_
3. Each request may involve using `processSearch(string query)` call to another cluster of machines to get the actual result
4. The machine which responds to a query is _chosen at random_
5. `processSearch` is _very expensive_
6. We need to design a _caching mechanism for the most recent queries_

## Solution

Given the above info, we need to design a caching mechanism for the following flow

![Flow](diagram.dio.svg)

First, we'll need to answer some questions

1. How should we treat search queries? should we trim whitespace? ignore hyphens? etc
2. How long should we cache the most recent queries? in other word, what is the cache TTL
3. Should we evict the cache in some cases?

For the above questions I'll make the following assumptions

1. Query should be trimmed of trailing whitespaces and hashed
2. Most recent queries are the queries which were queried in the last 5 minutes
3. There is no special case to evict the cache, although we can provide a special system to purge specific search terms.

Given the above assumptions and the question information we can understand we _must_ use some sort of _public cache_. Why? because the machine is chosen at random.

Therefore, the flow of actions would be

1. User queries the web server
2. The web server instance trims and hashes the search query
3. The web server instance looks for the key in the public cache
   1. Cache hit - return the cached response
   2. Cache miss
      1. Delegate the query to the search api cluster
      2. Cache the response with time to live of 5 minutes
      3. Return the response to the client
