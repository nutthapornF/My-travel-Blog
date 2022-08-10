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
  // get all destination -----------------
  app.get("/destination", async (req, res) => {
    try {
      const db = client.db("travelsite").collection("destination");
      const result = await db.find({}).toArray();
      console.log(result);
      return res.json({
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  });

  /* -------get one destination ------- */
  app.get("/destination/:id", async (req, res) => {
    try {
      const postId = ObjectId(req.params.id);
      const db = client.db("travelsite").collection("destination");
      const result = await db.findOne({ _id: postId });
      return res.json({
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  });
  // create new destination ---> see to it if we have to add json body manually
  app.post("/destination/create", async (req, res) => {
    try {
      const db = client.db("travelsite").collection("destination");
      const newDestination = {
        ...req.body,
      };
      await db.insertOne(newDestination);
      res.status(200).json(`New destination has been created `);
      console.log(newDestination);
    } catch (error) {
      console.log(error);
    }
  });
  // update destination ----
  app.put("/destination/update/:id", async (req, res) => {
    try {
      const updateDestination = {
        ...req.body,
      };
      const postId = ObjectId(req.params.id);
      const db = client.db("travelsite").collection("destination");
      await db.updateOne(
        { _id: postId },
        {
          $set: updateDestination,
        }
      );
      return res.json({ message: `destination id ${postId} has been updated` });
    } catch (error) {
      console.log(error);
    }
  });
  //delete destination ---------------------
  app.delete("/destination/delete/:id", async (req, res) => {
    try {
      const postId = ObjectId(req.params.id);
      const db = client.db("travelsite").collection("destination");
      await db.deleteOne({ _id: postId });
      return res.json({ message: `destination id ${postId} has been deleted` });
    } catch (error) {
      console.log(error);
    }
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
