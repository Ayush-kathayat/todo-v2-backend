import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./configs/databaseConnection.js"; //dont forget to add the .js extension'
import router from "./routes/tasksRoutes.js";

const PORT = 5050;
const app = express();

// middlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Enable All CORS Requests
app.use(
  cors({
    origin: "http://localhost:5173", // replace with the domain of your front-end app
    credentials: true,
    methods: "GET,PUT,POST,DELETE",
  })
);

app.use(cookieParser());

app.use("/api/v2", router); // using the routes

// database connection

connectDB(); // calling the function to connect to the database

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
