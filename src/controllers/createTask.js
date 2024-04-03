import  Task  from "../models/tasks.js"; //!  the task model

const createTask = async (req, res) => {
  const task = new Task({
    taskTitle: req.body.taskTitle,
    description: req.body.description,
    completed: req.body.completed,
  });
  try {
    const newTask = await task.save(); //  saving the task
    res.status(201).send(newTask);
  } catch (error) {
    console.log(error.message || "Some error occurred while creating a Task");
  }
};

export default createTask;