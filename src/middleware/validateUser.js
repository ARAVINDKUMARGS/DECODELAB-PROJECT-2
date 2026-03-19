// Section: Input validation middleware
function validateUser(req, res, next) {
  const { name, email } = req.body;

  // Validate required fields.
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Validation failed: name and email are required",
    });
  }

  // Optional extra check for JSON types.
  if (typeof name !== "string" || typeof email !== "string") {
    return res.status(400).json({
      success: false,
      message: "Validation failed: name and email must be strings",
    });
  }

  return next();
}

module.exports = validateUser;
