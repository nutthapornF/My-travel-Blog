import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const connectionString = process.env.DB_CONNECTIONS;
const databaseName = "travelsite";

export const client = new MongoClient(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true, // เป็นการใช้ Connection management engine ตัวใหม่
  },
  console.log(`Connected to MongoDB ${databaseName} `)
);
export const db = client.db(databaseName);
// export const userRegist = new MongoClient(
//   connectionString,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   },
//   console.log(`connected to ${userDatabase}`)
// );
