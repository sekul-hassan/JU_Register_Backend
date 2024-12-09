const express = require('express');
const authMiddleware = require("../Middleware/authMiddleware");
const { payment } = require("../Middleware/stripe");
const {getAllTransactions} = require("../Service/TransactionService");
const transactionRouter = express.Router();

transactionRouter.get("/getAllTransaction", getAllTransactions);

module.exports = transactionRouter;
