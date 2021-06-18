## Step 1: Who will use it? And why?

As of the question, we need to test an ATM in a _distributed banking system_.

The users of the ATM will people with bank account (not only our bank) and the bank workers.

## Step 2: What are the use cases?

For regular users:

1. Withdraw money (with extra interest for outer banks)
2. Deposit money (with extra interest for outer banks)
3. View account details

For bank workers:

1. Check ATM status, balance of cash, amount of bills, etc
2. Add / withdraw cash from the amt

## Step 3: What are the bounds of use?

Only authorized users, with valid credit card and secret pin, can do any action listed above.

For authorized users:

1. Allow to withdraw money as a whole (if not enough bills, do not partly withdraw)
2. Allow to deposit money only if not full
3. On withdrawal / deposit, _immediately_ reflect the changes on the users account.
4. On concurrent withdrawals / deposits, process them _sequentially_

## Step 4: What are the stress / failure points?

The key aspect of this testing is _concurrent_ actions. We need to test _every action_ under heavy concurrent usage.

User might withdraw multiple times in parallel, we need to make use it is processed sequentially.

An atm might go offline in mid-transaction, we need to make sure that the transaction is either fully happened or didn't happen at all.

## Step 5: What are the test cases? How will you perform the testing?

We can perform most of the testing automatically, manual testing cannot be avoided.

For the automatic testing we will need to run _in parallel_ actions, for example:

1. Multiple parallel withdraws on the same account
2. Multiple parallel deposit on the same account
3. Multiple parallel money transfers
4. Network crash in a middle of transaction

For the manual testing we can make sure the ATM is working correctly, card reader, secret pin panel and so on.
