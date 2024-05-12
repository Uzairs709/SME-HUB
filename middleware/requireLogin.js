const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../key");
const mongoose = require("mongoose");
const users = mongoose.model("users");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ error: "Not authorized" });
  }

  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized access" });
    }

    const { _id } = payload;

    users
      .findById(_id)
      .then((userdata) => {
        if (!userdata) {
          return res.status(401).json({ error: "User not found" });
        }

        // Attach user data to the request for use in subsequent middleware or routes
        req.users = userdata;

        // Call next() to proceed to the next middleware or route handler
        next();
      })
      .catch((error) => {
        console.error("Error in requireLogin middleware:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  });
};
