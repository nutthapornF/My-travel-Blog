import express from "express";
import { Router } from "express";
import { ObjectId } from "mongodb";

import bodyParser from "body-parser";

/* dataBase */
import { client } from "./db.js";

// เรียกใช้ Function `connect` จาก `client`
// อย่าลืม `await` เนื่องจาก `connect`เป็น async
async function init() {
  const app = express();
  const port = 3000;
  const dataRouter = Router();
  await client.connect();

  app.use(bodyParser.json());

  app.get("/", (req, res) => {
    res.send("Hello DTs Ohlooo");
  });
  app.get("/destination", async (req, res) => {
    const db = client.db("travelsite").collection("destination");
    const result = await db.find({}).toArray();
    console.log(result);
    return res.json({
      data: result,
    });
  });

  /* -------get one destination ------- */
  app.get("/destination/:id", async (req, res) => {
    const postId = ObjectId(req.params.id);
    //console.log(postId);
    const db = client.db("travelsite").collection("destination");
    const result = await db.findOne({ _id: postId });
    console.log(result.content);
    return res.json({
      data: result,
    });
  });

  app.get("*", (req, res) => {
    res.status(404).send("not found");
  });
  // response from server -----------------
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}
init();
