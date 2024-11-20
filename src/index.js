const synchronization = require("./DBConfig/Synchronization");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./Routes/UserRoutes");
const examRouter = require("./Routes/ExamRoute");
const certificatesRouter = require("./Routes/CertificatesRoutes");
const {payment} = require("./Middleware/stripe");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/user",userRouter);
app.use("/api/exam",examRouter);
app.use("/api/certificates",certificatesRouter);
app.use("/api/payment",payment);


app.get("/", (req, res) => {
    return res.send("Welcome");
})


app.listen(port, async () => {
    console.log(`Listening on port: ${port}`);
    await synchronization();
})


