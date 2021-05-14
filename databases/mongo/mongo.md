
Stitch -- serverless

Schemaless -- No predefined schema

Collections  -- similar of tables

Documents  -- similar of rows

show dbs

use shop

db.products.insertOne({name:"A book",price:12.99})

dp.products.find()

dp.products.find().pretyy()

BSON -- Binary Json -- Extra data types ObjectId



find() -- gives us back Cursor  not list//first 20

find().toArray() -- to get all records (Not recommended)  find().foerEach() is recommended 

findOne() -- doesn't give Cursor , so pretty is not applicable

db.flightData.find({},{distance:1,_id:0}) -- Projection 0 -to hide 1- to show

{a:NumberInt(1)} {a:NumberLong(1000000)}

Strong OneToOne --- Embeded object

OneToMany -- Embeded Object  //  based on requirement we have to choose between Embeded Object or Reference


16mb limit remember this

manytomany -- 2 tables without join table

order insert   {ordered:false}

journal -- backup

{writeConcern:{w:1,j:true.wtimeOut:200}}  //applicaple to inserts,updates,deletes

w -- acknowldegment

j-- add to journal or not

wtimeOut -- write timeout

outside shell ---
  mongoimport tv-shows.json -d moviedata -c movies --jsonArray --drop

//7075558179  ---   sudhir manager

insertOne insertMany  insert(deprecated)

findOne find(gives cursor)     (no findMany)  

replaceOne

updateOne  updateMany  update(deprecated)

deleteOne  deleteMany

**Comparison Operators**
$eq  $ne  $lt   $gt   $lte  $gte  

$in  $nin

**Logical Operators**
$or  $nor

$and  //by default all the keys are concated by and, but when we are filtering on same filed we have to use and

$not
  
**Element Operators**

$exists // to check whether key is present or not

$type  // to get type of key

**Evaluation Operators**

$jsonSchema

$regex

$expr  // powerful command , we can write if else conditions using expr

**Array Operators**

$size

$all

$elemMatch  // for entire object match in object arrays   { <field>: { $elemMatch: { <query1>, <query2>, ... } } }


$slice -- projection in array
  db.collection.find(
   <query>,
   { <arrayField>: { $slice: <number> } }
);

db.collection.find(
   <query>,
   { <arrayField>: { $slice: [ <number>, <number> ] } }
);

updating same field with update operators is not possible

$min -- updates field if updating value is less than actual
$max -- updates field if updating value is grater than actual
$max -- multiply the field with given number


COLLSCAN

IXSCAN

##If we are returning almost all the records then indexes wont be useful  


Indexes are useful for sorting , for sorting large documents Indexes are required

TTL indexex work on single index and date field only , not work on compound index and none date fields

explain --  querryPlanner , executionStats , allPlansExecution

no of keys examined == no of documents examined == no of documents returned  -->  Covered Queries

A covered query is a query that can be satisfied entirely using an index and does not have to examine any documents. An index covers a query when all of the following apply: all the fields in the query are part of an index, and. all the fields returned in the results are in the same index.


Multi key Indexes -- Array as index

default_language    weights  -- text index options


{type:"point",coordinates:[]}  // for geo data

index of "2dsphere" 

$near  $geometry  $geowithin $maxDistance $minDistance $geoIntersects  $centerSphere





