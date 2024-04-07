import express from "express";
import passport from "passport";
import initializePassport from "../configs/passport.js";

import { register, login } from "../controllers/controller.js";


initializePassport(passport);

const userRouter = express.Router();


userRouter.post("/register", register);

userRouter.post('/login', passport.authenticate('local'), login);

export default userRouter;