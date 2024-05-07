import { MongoClient } from "mongodb";
require('dotenv').config();

const uri = process.env.MONGO_URI as string;
const options = {};
let client;
let mongoClientPromise: Promise<any>;

declare global {
    var _mongoClientPromise: Promise<any>;
};

if(!uri){
    throw new Error("No Mongo URI in the .env.local");
};

if(process.env.NODE_ENV === "development"){
    if(!global._mongoClientPromise){
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    mongoClientPromise = global._mongoClientPromise;

}else{

    client = new MongoClient(uri, options);
    mongoClientPromise = client.connect();

};

export default mongoClientPromise;
