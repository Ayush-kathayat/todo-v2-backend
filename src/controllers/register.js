import User from '../models/users.js';


const register = async (req, res) => {

  try{
    const {name, username, password} = req.body;

    if(!name || !username || !password){
      return res.status(400).send("Please provide all details");
    }
    // check if user already exists
    const userExists = await User.findOne({username});
    if(userExists){
      return res.status(409).send("User with the same email address already exists");
    }
    const user = new User({name, username, password});  // create a new user
    await user.save();
    res.status(201).send(user + "User registered successfully");
  }catch(error){
    console.log(error.message || "Some error occurred while registering a User");
  }
}

export default register;