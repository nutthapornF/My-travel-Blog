import { Router } from "express";
import { login, register } from "../controller/authController";

const authRouter = Router();

authRouter
  // Register User -> http://localhost:4000/auth/regist
  .post("/regist", register)
  // Login User -> http://localhost:4000/auth/login
  .post("/login", login);

export default authRouter;
