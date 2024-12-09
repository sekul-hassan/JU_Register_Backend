const Certificates = require("../Model/Certificates");
const User = require("../Model/User");
const Transaction = require("../Model/Transaction");

const addCertificates = async (req, res) => {

    const { name, examRoll, regiNo, session, semester, examYear,bill } = req.body;
    // const {id,email} = req.user;
    const id = 8;  // Replace with dynamic user id if needed
    const email = "Sakib@gmail.com";  // Replace with dynamic email if needed
    console.log(req.body);
    console.log(req.clientSecret)
    if (!name || !examRoll || !regiNo || !session || !semester || !examYear) {
        return res.status(400).json({ error: 'All fields (name, examRoll, regiNo, session, semester, examYear) are required' });
    }

    try {

        const user =  await User.findOne({
            where:{
                id:id,
                email:email,
            }
        })

        if(!user){
            console.log("User not exists");
            return res.status(404).json({error: "User not found"});
        }

        const newCertificate = await Certificates.create({
            name,
            examRoll,
            regiNo,
            session,
            semester,
            examYear,
            userId:id,
        });
        const transaction = await Transaction.create({
            userId: id,
            title: "Your certificate bill is created successfully",
            card:"Payment is created by card",
            amount: bill
        })
        console.log(req.clientSecret)
        return res.status(201).json({
            message: "Certificate created successfully",
            certificate: newCertificate,
            clientSecret:req.clientSecret
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Something went wrong while creating the certificate' });
    }
};

module.exports = { addCertificates };