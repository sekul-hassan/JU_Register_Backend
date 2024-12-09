const express = require('express');
const { saveExamForm } = require("../Service/ExamService");
const authMiddleware = require("../Middleware/authMiddleware");
const { payment } = require("../Middleware/stripe");
const examRouter = express.Router();

examRouter.post("/examForm", payment, saveExamForm);

module.exports = examRouter;
