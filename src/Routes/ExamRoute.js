const express = require('express');
const {saveExamForm} = require("../Service/ExamService");
const authMiddleware = require("../Middleware/authMiddleware");
const examRouter = express.Router();

examRouter.post("/examForm",authMiddleware,saveExamForm);

module.exports = examRouter;