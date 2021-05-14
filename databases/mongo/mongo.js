//show dbs

//use user
//db.users.find()
//db.users.find().pretty()

//use axonframework
//db.domainevents.find()

//use flights

//db.flightData.insertOne({
//    "departureAirport": "MUC",
//    "arrivalAirport": "SFO",
//    "aircraft": "Airbus A380",
//    "distance": 12000,
//    "intercontinental": true
//  })

//db.flightData.find()
//
//db.flightData.insertOne({departureAirport: "MUC",
//                         arrivalAirport: "SFO"})

//db.flightData.deleteMany({})    //{ "acknowledged" : true, "deletedCount" : 4.0}

//db.flightData.updateOne({aircraft:"Airbus A380"},{$set:{marker:"delete"}})

//db.flightData.deleteOne({marker:"delete"})

//db.flightData.insertMany([ {
//    "departureAirport": "MUC",
//    "arrivalAirport": "SFO",
//    "aircraft": "Airbus A380",
//    "distance": 12000,
//    "intercontinental": true
//  },
//  {
//    "departureAirport": "LHR",
//    "arrivalAirport": "TXL",
//    "aircraft": "Airbus A320",
//    "distance": 950,
//    "intercontinental": false
//  }])

//db.flightData.find({distance:{$gt : 1000}})

//db.flightData.update({_id:ObjectId("608aa125c97c350ce98ba4a5")},{marker:"updated"})  // better to use Updateone or updatemay

//db.flightData.replaceOne({_id:ObjectId("608aa125c97c350ce98ba4a5")},{
//    "departureAirport": "MUC",
//    "arrivalAirport": "SFO",
//    "aircraft": "Airbus A380",
//    "distance": 12000,
//    "intercontinental": true
//  })

//db.flightData.find().forEach(flight=>{printjson(flight)})
  
 //db.flightData.find().forEach(flight=>{printjson(flight.aircraft)}) 
 
 //db.flightData.find({},{distance:1,_id:0}) //projection
 
//use flights

//db.dropDatabase()  //to drop database entirely

//db.flightData.drop()  //to drop collection within db

//db.flightData.insertMany([{name:"gopi"},{lastname:"mathi"}])

//db.stats()

//typeof db.flightData.findOne({}).aircraft

//db.help()

//db.flightData.help()

//db.flightData.insert([{name:"gopi",age:24},{name:"kris"}])

//db.movies.find({})

//db.movies.find({runtime: 60})

//db.movies.find({runtime: {$eq:60}})

//db.movies.find({runtime: {$ne:60}}) //not equal

//db.movies.find({runtime: {$lt:60},type:"Scripted"},{runtime:1,type:1})

//db.movies.find({"rating.average":{$gt:7}})  // embeded object , same used for arrays containing objects

//db.movies.find({"genres":"Drama"})  // Drama within array, may contain others

//db.movies.find({"genres":["Drama"]})  // exact array match

//db.movies.find({runtime:{$in:[30,42]}})  // either runtime 30 or 42

//db.movies.find({runtime:{$nin:[30,42]}})  //  runtime not equal to 30 or 42

//db.movies.find({$or:[{"rating.average":{$lt:5}},{"rating.average":{$gt:9.3}}]}).count()

//db.movies.find({$nor:[{"rating.average":{$lt:5}},{"rating.average":{$gt:9.3}}]}).count()

//db.movies.find({$nor:[{"rating.average":{$lt:5}},{genres:"Drama"}]}).count()

//db.movies.find({$and:[{"rating.average":{$gt:9}},{genres:"Drama"}]}).count()

//db.movies.find({"rating.average":{$gt:9},genres:"Drama"}).count() 

//db.movies.find({$and :[{genres:"Drama"},{genres:"Horror"}]}).count() // same key and is useful

//db.movies.find({runtime:{$not:{$eq:60}}}).count()

//db.users.insertMany([{name:"gopi","phone":"995664"},{name:"sudhir",phone:564644,age:30}])

//db.users.find({age:{$exists:true,$gte:30}})

//db.users.find({age:{$exists:false}})

//db.users.insertOne({name:"kris",age:null})

//db.users.find({age:{$exists:true,$ne:null}})

//db.users.find({phone:{$type:"string"}})

//db.users.find({phone:{$type:["string","double"]}})

//db.movies.find({summary:{$regex:/musical/}})  // pattern matching

//db.users.find({name:/op/})

//db.finance.insertMany([{volume:80,target:70},{volume:90,target:170},{volume:60,target:50}])

//db.finance.find({$expr:{$gt:["$volume",75]}})

//db.finance.find({$expr:{$gt:["$volume","$target"]}})  // where volume greater than target

//use user

//db.users.insertMany([{name:"abc",hobbies:["cooking","playing"]},{name:"def",hobbies:["riding"]},{name:"ghi",hobbies:["fucking","playing","reading"]}])

//db.users.find({hobbies:{$size:3}},{hobbies:1,_id:0}).forEach(x=>printjson(x.hobbies[0]))  // size should be exact, gt lt doesnt support

//db.users.insertOne({name:"uio",hobbies:["playing","cooking"]})

//db.users.find({hobbies:["cooking","playing"]})  // ordering of array elements is checked

//db.users.find({hobbies:{$all:["cooking","playing"]}})  //ordering of array is not checked

//const cursor= db.users.find({})

//cursor.next() // next one 

//cursor  //next 20

//cursor.hasNext()  // false

//const cursor= db.users.find({}) //  [js] SyntaxError: redeclaration of const cursor

//const cc= db.users.find({})  // new name 

//cc.hasNext() // true

//db.users.find({name:{$exists:true}}).sort({name:-1,age:1}) // -1 --Descending order, 1 -- Ascending order

//db.users.find({name:{$exists:true}}).sort({name:-1}).skip(2).limit(1)

//db.users.find({"hobbies.title":"Sports","hobbies.frequency":3})

//db.users.find({hobbies:{$elemMatch:{title:"Sports",frequency:3}}})

//db.users.updateOne({_id:ObjectId("609905b9637cf04ee862f1e0")},{$set:{hobbies:[{"title" : "Sports","frequency" : NumberInt(3)},{"title" : "Fucking","frequency" : NumberInt(6)}]}})


//db.users.updateMany({"hobbies.title":"Sports"},{$set:{isSporty:true}})

//db.users.updateOne({_id:ObjectId("609905b9637cf04ee862f1e0")},{$set:{age:24,phone:"9573941512"}})

//db.users.updateOne({name:"Manuel"},{$inc:{age:2}})

//db.users.updateOne({name:"Manuel"},{$inc:{age:2},$set:{isSporty:false}})

//db.users.updateOne({name:"Manuel"},{$inc:{age:2},$set:{age:30}}) //not possible exception

//db.users.updateMany({isSporty:true},{$unset:{phone:""}}) //to drop the field

//db.users.updateMany({},{$rename:{age:"totalAge"}}) //to rename field

//db.users.updateOne({name:"Gopi"},{$set:{age:34,hobbies:[{title:"fucking",frequency:3}]}},{upsert:true})

//db.users.updateMany({hobbies:{$elemMatch:{title:"Sports",frequency:{$gte:3}}}},{$set:{"hobbies.$.highFrequency":true}}) // $- first element

//db.users.updateMany({age:{$gt:30}},{$inc:{"hobbies.$[].frequency":-1}}) // all array elements

//db.users.updateMany({"hobbies.frequency":{$gt:2}}, {$set:{"hobbies.$[el].goodFrequency":true}},{arrayFilters:[{"el.frequency":{$gt:2}}]}) // only sepcific elements

//db.users.updateMany({name:"Gopi"},{$push:{hobbies:{title:"reading"}}})

//db.users.updateMany({name:"Gopi"},{$push:{hobbies:{$each:[{title:"eating"},{title:"sleeping"}],$sort:{title:-1}}}})

//db.users.updateOne({name:"Gopi"},{$pull:{hobbies:{title:"kissing"}}})

//db.users.updateOne({name:"Gopi"},{$pop:{hobbies:1}}) //1 -- last element -1 -- first element

//db.users.updateOne({name:"Gopi"},{$addToSet:{hobbies:{title:"eating"}}}) // similar to push, but it doesnt add if same data already present
//use contactData

//db.original.renameCollection("contacts")

//show collections

//db.contacts.find()

//db.contacts.explain("executionStats").find({"dob.age":{$gte:60}})

//db.contacts.createIndex({"dob.age":1}) // 1- Ascending    -1  - Descending

//db.contacts.dropIndex({"dob.age":1})

//db.contacts.createIndex({"dob.age":1,gender:1})  // compound index

//db.contacts.dropIndex({"dob.age":1,gender:1})

//db.contacts.getIndexes()

//db.contacts.createIndex({email:1},{unique:true}) // by default _id is unique, similar functionality is acheived by indexes

//db.contacts.createIndex({"dob.age":1},{partialFilterExpression:{gender:"male"}}) //partial index

//db.users.insertMany([{name:"gopi",email:"aa@bb.cc"},{name:"kris"}])

//db.users.createIndex({email:1},{unique:true})

//db.users.insertOne({name:"monitha"}) //"E11000 duplicate key error collection: contactData.users index: email_1 dup key: { email: null }",

//db.users.dropIndex({email:1})

//db.users.createIndex({email:1},{unique:true,partialFilterExpression:{email:{$exists:true}}})

//db.users.insertOne({name:"monitha"})  // now it will works

//db.sessions.insertOne({name:"first",createdAt:new Date()})

//db.sessions.createIndex({createdAt:1},{expireAfterSeconds:10})  // time to live index

//db.products.createIndex({description:"text"})  // only one text index per collection

//db.products.find({$text:{$search:"good"}})

//db.products.find({$text:{$search:"awesome t-shirt"}},{score:{$meta:textScore}})

//db.products.dropIndex("description_text") // text index only dropped by name

//db.products.createIndex({title:"text",description:"text"})

//db.ratings.createIndex({age:1},{background:true})
