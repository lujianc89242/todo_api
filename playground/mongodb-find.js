// Check mongodb.github.io for documentations
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// first arg.: url  second arg. callback
MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) =>{
  if(err){
    return console.log('Uable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');
  const db = client.db('TodoApp');

  // a basic query
  // .find is for query
  // db.collection('Users').find({
  //   _id: new ObjectID('5bde852f4fd1caa2e6f6d42e')
  // }).toArray().then((docs) => {
  //   // success case
  //   console.log('Users');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   // error handling
  //   console.log('Unable to fetch users', err);
  // });

  // count the users
  db.collection('Users').find().count().then((count) => {
    // success case
    console.log(`Users count: ${count}`);
  }, (err) =>{
    // error handling
    console.log('Unable to fetch users', err);
  });


  //client.close(); // for mongo v3, use client.close()
});
