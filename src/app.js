import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    // connection to the database
    dbName: "todo-backend",
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

//schema

const todoSchema = new mongoose.Schema({
  // creation of schema
  name: String,
  email: String,
  password: String,
});

const user = mongoose.model("Users", todoSchema); // COLLECTION  // or models

const PORT = 5050;
const app = express();

// middlewares

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Enable All CORS Requests
// app.use(cors());

app.use(
  cors({
    origin: "http://localhost:5173", // replace with the domain of your front-end app
    credentials: true,
    methods: "GET,PUT,POST,DELETE",
  })
);

app.use(cookieParser());

app.get("/", (req, res) => {
  // console.log(req.cookies);
  res.send("Hello World");
});

// creating a new user

app.post("/api/auth/signup", (req, res) => {
  const { username, email, password } = req.body;

  user
    .create({
      name: username,
      email: email,
      password: password,
    })
    .then(() => {
      res.cookie("token", "I AM Ayush", {
        sameSite: "lax",
        secure: false,
        httpOnly: true,
      });
      res.json({ message: "Form submitted successfully" });
    })
    .catch((err) => {
      console.error(err); // Log the error for debugging
      res.status(500).send("An error occurred during signup.");
    });
});
app.get("/api/auth/check-token", (req, res) => {
  const token = req.cookies["token"];

  console.log("Token:", token); // Log the token

  if (!token) {
    return res
      .status(401)
      .json({ message: "Hello i am from the server NOT AUTHENTICATED" });
  }

  // Here, you would typically verify the token and check if the user is authorized.
  // If the token is invalid or the user is not authorized, send a 401 or 403 response.

  // If the token is valid and the user is authorized, proceed with handling the request.
});

// creating todos for the user

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
