
Normalization -- Removing redundancy

normalization divides the larger table into smaller tables and links them using relationships

Insertion Anomaly 
Updation Anamoly 
Deletion Anamoly

1NF - atomic values
2NF - no partial dependency (dependency --non prime should depend on all primes)
3NF - no transitive dependency (when one non prime depends on other non prime) 

Keys in Table:::

super Key -- set of attributes that uniquely identifies the row (it may contain extra attributes)
combination of attributes that uniquely identifies the row

candidate key -- uniquely identifies the row (can be more than one) -- should not be null or empty and it should be unique

primary key -- most appropriate candidate key (only one)

foreign key -- primary key of another table

Composite key -- two or more primary keys

Secondary/Alternate keys -- other columns in tables

Indexing is used to optimize the performance of db by minimizing the no of disk access required when a querry is processed. (similar to index in book)
   Searchkey    data Reference
   
 users cannot see indexes.
 
 CREATE INDEX idx_lastname ON Employees(last_name);
 
 Indexing should be avoided if insertions or updations are more in table.   
   
Types of Indexing:

1)primary
  i)Dense -- No of entries in index table is same as no of entries in main table (when unordered)
  ii)Sparse -- not every entry instead blocks (for ordered data)
  
2)Clustering -- In case of non unique key

3)Secondary -- two level indexing 1- ram 2-hard disk



Second Highest Salary:

1) select max(salary) from employee where salary < (select max(salary) from employee);

2)select salary from (select salary from employee order by salary desc limit 2) as Emp order by salary limit 1;

3)select Top 1 salary from (select Top 2 salary from employee order by salary desc) as empl order by salary asc;
  // can replce 2 with N to find Nth highest



Views in Sql:
 
 Virtual table --it doesnt have any data -- stored as permanent querry objects in db
 
 hides complexity of joins and used for security mechanisms
 
 create view name as select * from employee where age >19;
 
 
Where -- filter at row level (row data)

Having -- filter at group level by using aggregate function (aggregated data)

SELECT Student, SUM(score) AS total FROM Marks where Student is not null  GROUP BY Student
HAVING total > 70


Note:  It is not a predefined rule but  in a good number of the SQL queries, we use WHERE prior to GROUP BY and HAVING after GROUP BY. The Where clause acts as a pre filter where as Having as a post filter.

Union -- removes duplicate records (Vertical)

Union All -- duplicate records are not deleted

select * from customers union select * from suppliers;

select * from customers union all select * from suppliers;

Note : same no of columns,columns must have similar datatypes, columns must be in same order


In - multiple OR --Big Outer querry small inner querry 

select * from student where dept in (ece,cse,eee); // we can use sub querry also

Exist - returns either true or false -- small outer querry big inner querry

select * from customers where exists( select city from table2 where table2.id=customer.id);


SubQuerry-- can only select from first table, slower

Join -- can select from both the tables, fasters (Horizontal)

select phone,cust_name,order_id from customers C JOIN orders O ON C.cust_id=O.cust_id;

::::Duplicates in column:::

select empid from employees group by empid having count(empid) > 1;


** creating table (structure) from exisisting table**

select * into newTable from oldTable where 1=0;  (only newTable schema will be created)











 
 
 
 
 
 


  
   
 
 






