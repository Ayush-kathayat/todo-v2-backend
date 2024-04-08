import Task from "../models/tasks.js";
import User from "../models/users.js";

const createTask = async (req, res) => {
  const { taskTitle, description, completed, userId } = req.body; // destructuring the request body

  try {
    // Create a new task
    const task = new Task({
      taskTitle,
      description,
      completed,
    });

    const savedTask = await task.save(); // Save the task to the database

    // Find the user and add the task's ID to the user's tasks array
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.tasks.push(savedTask._id);
    await user.save();

    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default createTask;