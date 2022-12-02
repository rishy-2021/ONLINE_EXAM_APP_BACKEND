const express = require("express");

const {
  addMainQuiz,
  getMainQuizes,
} = require("../controller/MainQuizController");

const quizRouter = express.Router();

quizRouter.route("/addMainQuiz").post(addMainQuiz);
quizRouter.route("/getMainQuizs").get(getMainQuizes);
// quizRouter.route("/deleteTempQuizs/:id").delete(deleteTempQuiz);

module.exports = quizRouter;
