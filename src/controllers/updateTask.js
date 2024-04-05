import Task from "../models/tasks.js"; //! don't forget to .js extension
import mongoose from "mongoose";
const updateTask = async (req, res) => {
  const { id: _id } = req.params;
  const task = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No task with that id");

    const updatedTask = await Task.findByIdAndUpdate(
      _id,                    
      { ...task, _id },       //! destructuring the task and adding the same id to the task
      { new: true }
    );

    res.json(updatedTask);
  } catch (error) {
    console.log(error.message || "Some error occurred while updating the Task");
  }
};

export default updateTask;