// import { db } from "../utils/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../utils/db.js";

import { mongooseUser } from "../model/user.js";

// POST - register ----------------------------------------------------------------
export const register = async (req, res, next) => {
  try {
    console.log("init....");
    console.log(req.body);
    const { first_name, last_name, email, password } = req.body;
    // console.log(first_name, last_name, email, password);

    if (!(email && password && first_name && last_name)) {
      res.status(400).send("All input is required");
    }

    //valide password
    if (typeof password !== "string") {
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

    // const db = client.db("travelsite").collection("user");
    await db.collection("user").insertOne(user);
    // console.log(user, "after add new");
    res.status(200).json(`User has been created successfully`);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res, next) => {
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
};
