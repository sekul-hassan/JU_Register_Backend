const express = require('express');
const {saveUser,login} = require("../Service/UserService");

const userRouter = express.Router();

userRouter.post("/register",saveUser);
userRouter.post("/login",login);

module.exports = userRouter;