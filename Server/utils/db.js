import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://NikkiF:Thatnikkigirl@newcluster.d4n69tl.mongodb.net/?retryWrites=true&w=majority";
const databaseName = "travel-site";

export const client = new MongoClient(
  connectionString,
  {
    useUnifiedTopology: true, // เป็นการใช้ Connection management engine ตัวใหม่
  },
  console.log(`Connected to MongoDB ${databaseName} `)
);
