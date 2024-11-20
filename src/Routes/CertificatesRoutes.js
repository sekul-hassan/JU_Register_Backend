const express = require('express');
const certificatesRouter = express.Router();
const authenticate = require("../Middleware/authMiddleware");
const {addCertificates} = require("../Service/CertificatesService");

certificatesRouter.post("/addCertificates",authenticate,addCertificates);

module.exports = certificatesRouter;