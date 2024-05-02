import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '/home/ayushkathayat/WEBDEV/todo-v2/todo-v2-backend/.env' });

}
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./configs/databaseConnection.js"; //dont forget to add the .js extension'
import passport from "passport";
import session from "express-session";
import taskRouter from "./routes/tasksRoutes.js";
import userRouter from "./routes/userRoutes.js";
import initializePassport from './configs/passport.js';
import { trusted } from 'mongoose';



const PORT = process.env.PORT || 5050;
const app = express()
// console.log();
// middlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Enable All CORS Requests
app.use(
  cors({
    origin: true, // replace with the domain of your front-end app Change it for the deployment
    credentials: true,
    methods: "GET,PUT,POST,DELETE",
  })
);

app.use(cookieParser());
// passport middleware

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { 
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      secure: process.env.NODE_ENV === 'production', // set this to true if you're using HTTPS
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // 'none', 'lax', or 'strict'
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

initializePassport(); // calling the function to initialize passport

app.use("/api/v2", taskRouter); // using the task routes

app.use("/api/v2", userRouter); // using the user routes

// database connection

connectDB(); // calling the function to connect to the database



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
