const mongoose = require("mongoose");

const mainQuizSchema = new mongoose.Schema({
  user: Object,
  Quiz_Ques: Object,
  Quiz_Ans: Object,
  Options: Object,
  Exam: String,
  Year: String,
  Solution: Object,
  Categery: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("mainQuizs", mainQuizSchema);
