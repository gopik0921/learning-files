
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


