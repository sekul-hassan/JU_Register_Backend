const synchronization = require("./DBConfig/Synchronization");
const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./Routes/UserRoutes");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/api/user",userRouter);


app.get("/", (req, res) => {
    return res.send("Welcome");
})


app.listen(port, async () => {
    console.log(`Listening on port: ${port}`);
    await synchronization();
})


