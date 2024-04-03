import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose
      .connect("mongodb://127.0.0.1:27017", {
        // connection to the database
        dbName: "todo-v2-backend",
      })
      .then(() => {
        console.log("Connected to the database");
      });
  } catch (err) {
    console.log("Error connecting to the database", err);
  }
};


export default connectDB;