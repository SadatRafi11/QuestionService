const express = require("express");
const connectDB = require("./config/ConnectDB");
const {
  getQuestions,
  createQuestion,
} = require("./controllers/QuestionController");
require("dotenv").config();

const app = express();
connectDB();

app.use(express.json({ extende: false }));
app.get("/", getQuestions);
app.post("/", createQuestion);

module.exports = app;
