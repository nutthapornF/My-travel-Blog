/* import { client } from "../db.js";
import { Router } from "express";
import { ObjectId } from "mongodb";

export const dataRouter = Router();

dataRouter.get("/destination", async (req, res) => {
  const db = client.db("travelsite").collection("destination");
  const result = await db.find({}).toArray();
  console.log(result);
  return res.json({
    data: result,
  });
});
/* -------get one destination ------- 
dataRouter.get("/destination/:id", async (req, res) => {
  const postId = ObjectId(req.params.id);
  console.log(postId);
  const db = client.db("travelsite").collection("destination");
  const result = await db.findOne({ _id: postId });
  console.log(postId);
  return res.json({
    data: result,
  });
});
 */
