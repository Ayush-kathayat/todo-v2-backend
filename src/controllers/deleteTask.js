import Task from '../models/tasks.js';


const deleteTask = async (req, res) => {
  const id = req.params.id;
  try{
    const task  = await Task.findByIdAndDelete(id);
    if(!task) return res.status(404).send("No task found");
    res.status(200).send("Task deleted successfully");
  }
  catch(error){
    console.log(error.message || "Some error occurred while deleting a Task");
  }
};
export default deleteTask;