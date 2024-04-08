//! here we will import the model we created 

import Task from '../models/tasks.js';
import User from '../models/users.js';
const showTasks = async (req, res) => {
  const { userId } = req.body; // destructuring the request body

 try {
    const user = await User.findById(userId).populate('tasks');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user.tasks);
 } catch (err) {
    res.status(500).json({ message: err.message });
 }
}
export default showTasks;
