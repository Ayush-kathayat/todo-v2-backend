const login = async (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.json(`${req.user.username} logged in successfully!`);
};

export default login;