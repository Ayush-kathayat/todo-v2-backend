import User from '../models/users.js';


const register = async (req, res) => {

  try{
    const {name, username, password} = req.body;

    if(!name || !username || !password){
      return res.status(400).send({message: "Please provide all the required fields"});
    }
    // check if user already exists
    const userExists = await User.findOne({username});
    if(userExists){
      return res.status(409).json({message: "User with the same email address already exists"});
    }
    const user = new User({name, username, password});  // create a new user
    await user.save();
    res.status(201).send(user);
  }catch(error){
    console.log(error.message || "Some error occurred while registering a User");
  }
}

export default register;