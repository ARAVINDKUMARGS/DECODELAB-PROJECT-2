// Section: Module imports
const { getAllUsers, addUser } = require("../data/userStore");

// Section: GET /users controller
function getUsers(req, res, next) {
  try {
    const users = getAllUsers();

    return res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    return next(error);
  }
}

// Section: POST /users controller
function createUser(req, res, next) {
  try {
    const { name, email } = req.body;

    const newUser = {
      id: Date.now(),
      name,
      email,
      createdAt: new Date().toISOString(),
    };

    addUser(newUser);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getUsers,
  createUser,
};
