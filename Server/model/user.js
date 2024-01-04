// const mongoose = require("mongoose");
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null, required: true },
  last_name: { type: String, default: null, required: true },
  email: { type: String, default: true, required: true },
  password: { type: String, required: true },
  token: { type: String },
});

// module.exports = mongoose.model("User", userSchema);
export const mongooseUser = mongoose.model("User", userSchema);
