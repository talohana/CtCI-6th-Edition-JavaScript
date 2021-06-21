Normalizing tables means we _do not_ store duplicate data across tables.

For example if we have `books` and `authors` tables, a books will have `AuthorID` field, which is a foreign key to the `authors` tables.

_Denormalization_ is exactly the opposite, we are duplicating the data across multiple tables.

The main pro of denormalization is to reduce the number of joins needed, which will result in faster queries.

The cons of denormalization are

1. Updating / deleting is harder and takes longer (we need to replace every duplicate
2. Data may be inconsistent, we don't have a single source of truth
3. Needs more storage
