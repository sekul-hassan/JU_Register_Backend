const Certificates = require("../Model/Certificates");
const User = require("../Model/User");

const addCertificates = async (req, res) => {

    const { name, examRoll, regiNo, session, semester, examYear } = req.body;

    const {id,email} = req.user;

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

        return res.status(201).json({
            message: "Certificate created successfully",
            certificate: newCertificate
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Something went wrong while creating the certificate' });
    }
};

module.exports = { addCertificates };
