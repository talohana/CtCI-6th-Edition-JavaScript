We need to write SQL query to get a list of _all buildings_ and the _number of open requests_ (requests with status 'Open')

```sql
SELECT BuildingName, ISNULL(Count, 0) as 'Count'
FROM Buildings
LEFT JOIN (
    SELECT Apartments.BuildingID, count(*) as 'Count'
    FROM Requests INNER JOIN Apartments
    ON Requests.AptID = Apartments.AptID
    WHERE Requests.Status = 'Open'
    GROUP BY Apartments.BuildingID
) ReqCounts
ON Buildings.BuildingID = ReqCounts.BuildingID
```
