const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();

users = [];

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/index.html");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  users.some(user.username === username);
});
