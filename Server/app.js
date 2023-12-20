import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import bodyParser from "body-parser";
import cloudinary from "cloudinary";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { Router } from "express";
import { ObjectId } from "mongodb";
import { client } from "./utils/db.js";
import dotenv from "dotenv";
import { cloudinaryUpload } from "./utils/upload.js";
import { mongooseUser } from "./model/user.js";

import authRouter from "./auth/index.js";
import { register } from "./controller/authController.js";
import { db } from "./utils/db.js";
import { createError } from "./utils/error.js";

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

  // app.use("/auth", authRouter);

  const multerUpload = multer({ dest: "uploads/" });
  const imagesUpload = multerUpload.fields([{ name: "images", maxCount: 28 }]);

  // const storage = multer.memoryStorage();
  // const upload = multer({ storage: storage });

  // const upload = multer({ dest: "./uploads/" });

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
  // regist  -----------------
  app.post("/auth/regist", async (req, res) => {
    try {
      console.log("init....");
      console.log(req.body);
      const { first_name, last_name, email, password } = req.body;

      if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }
      //valide password
      if (typeof password !== "string") {
        console.log("---------------------------");
        console.log("password", password);
        console.log("req.body", req.body);
        throw Error("Password is required");
      }
      // hashing password
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(password, salt);

      const user = {
        first_name,
        last_name,
        email: email.toLowerCase(),
        password: encryptedPassword,
      };
      await db.collection("user").insertOne(user);
      res.status(200).json(`User has been created successfully`);
    } catch (error) {
      console.log(error);
    }
  });

  //login ------------------------------------------------
  app.post("/auth/login", async (req, res) => {
    try {
      console.log(req.body.email);
      const user = await db.collection("user").findOne({
        email: req.body.email,
      });

      if (!user) {
        next(createError(400, "User not found"));
      }

      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!isValidPassword) {
        next(createError(400, "Password is not valid"));
      }

      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "24h",
        }
      );

      res.status(200).json({
        message: `Login Successful! Welcome ${user.email}`,
        user_id: user._id,

        token,
      });
    } catch (error) {
      next(error);
    }
  });

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
