import * as mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const mongoServer = new MongoMemoryServer();
const opts = { useNewUrlParser: true };

export async function startdb() {
  const mongoUri = await mongoServer.getConnectionString();
  await mongoose.connect(mongoUri, opts, err => {
    console.log(err);
  });
}

export async function stopdb() {
  await mongoose.disconnect();
  await mongoServer.stop();
}
