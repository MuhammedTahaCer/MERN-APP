import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";


async function connect(){
    const mongod =  await MongoMemoryServer.create();
    const Uri = mongod.getUri();

    mongoose.set('strictQuery', true)
    const db= await mongoose.connect(Uri)
    console.log("Database Connected Successfully")
    return db;
}

export default connect;