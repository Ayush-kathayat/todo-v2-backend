//! so these are just the routes that we are going to use in our application

import express from "express";

const router = express.Router();

//! here export the controller functions that we are going to use in the routes as the second arguments

import { createTask } from "../controllers/controller.js";

router.post("/task", createTask);

export default router;