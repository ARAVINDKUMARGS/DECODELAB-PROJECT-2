// Section: In-memory data store
// This array acts as a temporary database while the server is running.
const users = [];

// Section: Data access helpers
function getAllUsers() {
  return users;
}

function addUser(user) {
  users.push(user);
  return user;
}

module.exports = {
  getAllUsers,
  addUser,
};
