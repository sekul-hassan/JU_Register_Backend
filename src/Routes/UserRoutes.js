const express = require('express');
const {saveUser,login, getNotifications} = require("../Service/UserService");

const userRouter = express.Router();

userRouter.post("/register",saveUser);
userRouter.post("/login",login);
userRouter.get("/notification",getNotifications);

module.exports = userRouter;