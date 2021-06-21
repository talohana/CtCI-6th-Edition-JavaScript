We need to get a list of _tenants_ who are renting _more than one apartment_

```sql
SELECT TenantName
FROM Tenants
INNER JOIN (
    SELECT TenantID
    FROM AptTenants
    GROUP BY TenantID
    HAVING count(TenantID) > 1
) C
ON Tenants.TenantID = C.TenantID
```
