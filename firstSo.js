//how to connect to mongo

import { MongoClient, ObjectId} from "mongodb";
// import { ObjectId } from "mongodb/lib/bson.js";
import { uri } from "./credential.js"              //part of connecting to database//

const client = new MongoClient(uri)
const db = client.db('sample_mflix')
const moviesCollection = db.collection('movies')

//console.log( await moviesCollection.findOne({}))
let query = { title: { $regex: /star wars/i } }
let arrayMovie = await moviesCollection
    .find(query) //search database                              //specific search in database
    //.limit(3)  //sets max
    .toArray()  //make array

for (let i = 0; i < arrayMovie.length; i++) {
    console.log(arrayMovie[i].title)

}

//let firstMovie= myArray[0]
//console.log(firstMovie.title)


//console.log(`there are ${arrayMovie.length} movies`)

//db.close()

//add a new movie

const newMovie = {
    title: 'The Boca Code',
    rating: 'R',
    genre: ['Comedey'],
    releaseDate: '2022/12/16',

}

//const result = await moviesCollection.insertOne(newMovie)          // how i add something to data base  ^^^
//console.log('Results of insert',result)

const updateQuery = { _id: new ObjectId("6345ca64021ac9a7a5599e35") }
const update = { $set: { title: "THE NEW BOCA CODE"}}
const results = await moviesCollection.findOneAndUpdate(updateQuery, update)
console.log(results)