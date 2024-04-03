//! Here we will have the schema and the model (collection ) of all the users


import mongoose from "mongoose";


//schema

const userSchemaTodoV2 = new mongoose.Schema({
  // creation of schema
  name: String,
  email: String,
  password: String,
});

 const user = mongoose.model("Users", userSchemaTodoV2); // COLLECTION  // or models


 export default user; //exporting the model so we can use it in other files specifically in the controllers (userControllers.js)
