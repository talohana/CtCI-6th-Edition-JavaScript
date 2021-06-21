We need to design a database for storing information for student's grades.

Also provide a SQL query to return a list of top 10% students sorted by their grade point average.

## Step 1: Handle Ambiguity

I will make the following assumptions

1. We have a list of students
2. We have a list of courses
3. We keep only the student final grade, meaning there is a single link between tests and students

## Step 2: Define Core Objects

The core objects are `Student`, `Course` and `StudentTest` (a link between the tables).

## Step 3: Analyze Relationships

1. `Student` can take many `Course`s
2. `Course` can be taken by many `Student`s
3. There is a single link between certain `Student` and `Course`

The tables will be

1. Student
   1. StudentID\*
   2. FirstName
   3. LastName
   4. DOB
2. Course
   1. CourseID\*
   2. Name
   3. Date
   4. SubjectID
3. Subject
   1. SubjectID\*
   2. Name
4. StudentTest
   1. StudentID
   2. CourseID
   3. Grade

First we will declare GPACutOff to find minimum GPA required for the honor roll.

```sql
@DECLARE GPSCutOff float;
SET @GPACutOff = (
    SELECT min(GPA) as 'GPAMin' FROM (
        SELECT TOP 10 PERCENT AVG (StudentTest.Grade) AS GPA
        FROM StudentTest
        GROUP BY StudentTest.StudentID
        ORDER BY GPA desc
    ) Grades;
)
```

Then we need to use the GPACutOff in our query

```sql
SELECT StudentName, GPA
FROM (
    SELECT AVG(StudentTest.Grade) AS GPA, StudentTest.StudentID
    FROM StudentTest
    GROUP BY StudentTest.StudentID
    HAVING AVG(StudentTest.Grade) >= @GPACutOff
) Honors
INNER JOIN Students ON Honors.StudentID = Student.StudentID
```
