import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import bodyParser from "body-parser";
import cloudinary from "cloudinary";

import { Router } from "express";
import { ObjectId } from "mongodb";
import { client } from "./utils/db.js";
import dotenv from "dotenv";
import { cloudinaryUpload } from "./utils/upload.js";
import { mongooseUser } from "./model/user.js";

// import { register } from "./controller/authController.js";
import { db } from "./utils/db.js";
import { createError } from "./utils/error.js";

import { protect } from "./middlewares/protect.js";
import { login, register } from "./controller/authController.js";
import authRouter from "./auth/index.js";

// เรียกใช้ Function `connect` จาก `client`
// อย่าลืม `await` เนื่องจาก `connect`เป็น async
async function init() {
  const app = express();
  const port = 4000;
  const dataRouter = Router();

  await client.connect();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  dotenv.config();
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
  });

  // connect server with front // before this having some bug tha theyre not connecting to each others
  //sometimes axios is blocked by cors so we need to by pass it with this code then add proxy init package.json
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use(
    cors({
      origin: "*",
    })
  );

  /// will have to update to text-emphasis:
  /* const cors = require('cors');
app.use(cors({
    origin: ['https://www.section.io', 'https://www.google.com/']
})); */

  dataRouter.use(protect);

  // app.use("/auth", authRouter);

  const multerUpload = multer({ dest: "uploads/" });
  const imagesUpload = multerUpload.fields([{ name: "images", maxCount: 28 }]);

  /* ------------Router zone --------------- */

  // get all destination -----------------
  app.get("/destination", async (req, res) => {
    try {
      const db = client.db("travelsite").collection("destination");
      const result = await db.find({}).toArray();
      console.log(result);
      console.log("------");
      return res.json({
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  });

  //--- get 4 estination ---------------
  app.get("/destination/limit", async (req, res) => {
    try {
      const db = client.db("travelsite").collection("destination");
      const result = await db.find({}).limit(3).toArray();
      console.log(result);
      return res.json({
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  });

  /* get one destination ------- */
  app.get("/destination/:id", async (req, res) => {
    try {
      //const postId = ObjectId(req.params.id);
      const postId = mongoose.Types.ObjectId(req.params.id.trim());
      const db = client.db("travelsite").collection("destination");
      const result = await db.findOne({ _id: postId });
      return res.json({
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  });
  // regist  ---Login--------------
  app.post("/auth/regist", register);
  app.post("/auth/login", login);

  // create new destination ---> see to it if we have to add json body manually
  app.post("/destination/create", imagesUpload, async (req, res) => {
    try {
      console.log("init....");
      console.log(req.body);

      const db = client.db("travelsite").collection("destination");
      const newDestination = {
        ...req.body,
      };
      const imagesUrl = await cloudinaryUpload(req.files);
      newDestination["images"] = imagesUrl;
      await db.insertOne(newDestination);
      res.status(200).json(`New destination has been created `);
      // console.log(newDestination, "destination has been created");
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
