// Section: Module imports
const express = require("express");

const userRoutes = require("./routes/userRoutes");
const notFoundHandler = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

// Section: App initialization
const app = express();

// Section: Global middleware
// Parse incoming JSON requests.
app.use(express.json());

// Section: Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Users API is running",
  });
});

// Section: API routes
app.use("/users", userRoutes);

// Section: Not found middleware (404)
app.use(notFoundHandler);

// Section: Global error middleware (500 and other errors)
app.use(errorHandler);

module.exports = app;
