const express = require('express');
const certificatesRouter = express.Router();
const authenticate = require("../Middleware/authMiddleware");
const {addCertificates} = require("../Service/CertificatesService");
const {payment} = require("../Middleware/stripe");

certificatesRouter.post("/addCertificates",payment,addCertificates);

module.exports = certificatesRouter;