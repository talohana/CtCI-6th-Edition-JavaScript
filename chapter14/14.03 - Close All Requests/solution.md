We need to _close all requests_ from apartments in _building 11_

```sql
UPDATE Requests
SET Requests.Status = 'Close'
WHERE AptID IN (
    SELECT AptID
    FROM Apartments
    WHERE BuildingID = 11
)
```
