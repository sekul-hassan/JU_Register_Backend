const express = require('express');
const { saveExamForm } = require("../Service/ExamService");
const authMiddleware = require("../Middleware/authMiddleware");
const { payment } = require("../Middleware/stripe");
const {updateHallStatus} = require("../Service/HallService");
const hallRouter = express.Router();

hallRouter.put("/updateHallStatus", updateHallStatus);

module.exports = hallRouter;
