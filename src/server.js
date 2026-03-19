// Section: Module imports
const app = require("./app");

// Section: Server configuration
const PORT = process.env.PORT || 3000;

// Section: Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
