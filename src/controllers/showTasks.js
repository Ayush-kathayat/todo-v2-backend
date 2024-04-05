//! here we will import the model we created 

import Task from '../models/tasks.js';

const showTasks = async (req, res) => {
  try{
    const tasks = await Task.find();
    res.status(200).json(tasks);
  }
  catch(error){
    console.log(error.message || "Some error occurred while fetching all the Tasks");
  }
}
export default showTasks;
