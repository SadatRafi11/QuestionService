const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  point: {
    type: Number,
  },
  options: [
    {
      type: String,
    },
  ],
  category: {
    type: String,
  },
});

module.exports = Question = mongoose.model("questions", QuestionSchema);
