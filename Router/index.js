const express = require("express");
const router = express.Router();
const TempQuizRouter = require("../Router/TempQuizRouter");
const MainQuizRouter = require("../Router/MainQuizRouter");

router.get("/", (req, res) => {
  res.send("Welcome to stack overflow clone");
});

router.use("/", TempQuizRouter);
router.use("/main", MainQuizRouter);
// router.use("/sms", smsrouter);

module.exports = router;
