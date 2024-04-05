//! so these are just the routes that we are going to use in our application

import express from "express";

const router = express.Router();

//! here export the controller functions that we are going to use in the routes as the second arguments

import { createTask, deleteTask, showTasks, updateTask } from "../controllers/controller.js";

router.post("/task", createTask);

router.delete("/task/:id", deleteTask); // delete task by id  and we will get the id from the query params

router.get("/tasks", showTasks); // get all the tasks (we are not going to use any id here because we are going to get all the tasks

router.patch('/task/:id', updateTask);// update the task by id and we will get the id from the query params dont forget to pass the new task in the body

export default router;