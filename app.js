import express from 'express';
import mongoose from 'mongoose';



mongoose.connect('mongodb://127.0.0.1:27017', {                   // connection to the database
  dbName: 'todo-backend',
}).then(()=> {
  console.log('Connected to the database');
}).catch((err) => {
  console.log('Error connecting to the database', err);
});

//schema

const todoSchema = new mongoose.Schema({                        // creation of schema
  name : String,
  email : String,
  task : [{
    taskName : String,
    taskStatus : Boolean,
  }],
});

const user = mongoose.model('Users', todoSchema); // COLLECTION

const PORT = 5050;
const app = express();


app.get('/', (req , res) => {
  user.create({
    name: 'Sutirtho Chakarvorty',
    email: 'sutirtho@gmail.com',
    task: [
      {
        taskName: 'Complete the assignment',
        taskStatus: false,
      },
      {
        taskName: 'Complete the project',
        taskStatus: true,
      },
    ],
  }).then(() => {
    res.send("tODO CREATED IN THE DATABASE SUCCESSFULLY IN Mongodb");
  }).catch((err) => {
    res.send(err);
  });


});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});