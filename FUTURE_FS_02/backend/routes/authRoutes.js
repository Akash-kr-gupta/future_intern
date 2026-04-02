const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Login Admin
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return res.json({ token, message: "Login Successful" });
  }
  
  return res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
