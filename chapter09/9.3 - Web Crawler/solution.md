## Info

1. We are designing web crawler
2. How should we design it such that it won't get into infinite loops?

## Solution

### Assumptions

1. The pages are identified by a url

We need to design a web crawler, assuming the actions of the web crawler would be

1. Start a some input url (inserted into some queue)
2. Until the urls queue is not empty:
   1. Poll url from the queue
   2. If not visited:
      1. Fetch url and process the response
      2. Identify links in page and insert their urls into the queue

Step 2.2 is the tricky one, how could we identify urls we have already fetched?

We can avoid it in some ways

1. The most straightforward way is to store the urls in-memory. This option would be the fastest (no round-trips to db or some other cache) but it's bounded by the program memory.
2. We can use the file system, this would be a little slower but would allow as much storage as the machine the crawler is running on allows us. Can we do better by splitting the files across multiple machines?
3. Using in-memory data store, such as Redis. This would be the most _scalable_ solution. We can run it as a cluster and add machines as we go, and we don't store any extra data (such as record ID), only the urls we have visited in a `Set`.

Another optimization we might do is identify the visited urls already at stage 2.2.2. If the in-memory data store allows _bulk request_, we can at a single round trip to brush off all the urls we have already visited from the current page.
