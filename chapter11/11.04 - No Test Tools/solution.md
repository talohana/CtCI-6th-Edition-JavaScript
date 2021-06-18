## Step 1: Are we doing Black Box Testing or White Box Testing?

We are _load_ testing a webpage, so I'll assume we are doing Black Box Testing.

## Step 2: Who will use it? And Why?

We need to understand the expected amount of users the webpage will have and what kind of users.

## Step 3: What are the use cases?

We will be interested in the following metrics:

1. Latency - how long does it takes to receive a response from the server
2. Throughput - how many requests per seconds can the webpage handle
3. Web Vitals - metrics such as FCP, LCP, etc

## Step 4: What are the bounds of use?

We need to discuss with the interviewer how many requests the webpage _should_ respond successfully

## Step 5: What are the stress / failure points?

What happens when the webpage is overloaded? does it return an error page? queue users? redirect?

## Step 6: What are the test cases?

Without testing tools we will need to create our own testing tool.

We can create a program and specify the number of virtual users, each user will be a thread in our testing tool which hits the webpage as normal user would do.

Then, each user will log the response which can later be analyzed to extract percentiles, maximum bandwidth, response time etc.
