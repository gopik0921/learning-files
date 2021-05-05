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