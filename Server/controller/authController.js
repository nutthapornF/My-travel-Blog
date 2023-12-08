// import { db } from "../utils/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { mongooseUser } from "../model/user.js";

// POST - register ----------------------------------------------------------------
export const register = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const userRole = req.body;
    if (!(email && password && first_name && last_name)) {
      res.status(400).send("All input is required");
    }

    // hashing password
    encryptedPassword = await bcrypt.hash(password, 10);

    const salt = await bcrypt.genSalt(10);
    //   user.password = await bcrypt.hash(user.password, salt);
    const user = {
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    };
    //create new Token
    // const token = jwt.sign(
    //   { user_id: user._id, email },
    //   process.env.TOKEN_KEY,
    //   {
    //     expiresIn: "2h",
    //   }
    // );
    // //save user token
    // user.token = token;
    // //return new user-select:

    await db.collection("user").insertOne(user);
    console.log(user);
    res.status(200).json(`User has been created successfully`);
  } catch (error) {
    next(error);
  }
};
