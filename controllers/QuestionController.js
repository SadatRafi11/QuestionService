const Question = require("../models/Question.model");

const getQuestions = async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
};

const createQuestion = async (req, res) => {
  const question = new Question({ ...req.body });
  await question.save();
  res.json(question);
};

module.exports = { getQuestions, createQuestion };
