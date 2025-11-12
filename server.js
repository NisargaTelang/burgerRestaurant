// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Simple Login API (fake backend check)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});


// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
