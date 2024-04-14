import Task from "../models/tasks.js";
import User from "../models/users.js";

const deleteTask = async (req, res) => {
  // const userId = req.params.userId;  //! dont need this now we have req.user from passport 


  if(!req.isAuthenticated()){
    return res.status(401).json({message: "Unauthorized"})
  }
  const taskId = req.params.taskId;
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).send("No user found");

    // Remove the task ID from the user's tasks array
    user.tasks.pull(taskId);
    await user.save(); //and then save the user document

    // and then at last Delete the task document from the database  cause its no more of use now
    await Task.findByIdAndDelete(taskId);

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error.message || "Some error occurred while deleting a Task");
  }
};
export default deleteTask;
