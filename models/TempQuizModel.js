const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  user: Object,
  Quiz_Ques: Object,
  Quiz_Ans: Object,
  Options: Object,
  Vftn_Comp_image: String,
  Exam: String,
  Year: String,
  Solution: Object,
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("TempQuizs", quizSchema);
