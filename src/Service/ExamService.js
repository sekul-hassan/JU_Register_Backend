const User = require("../Model/User");
const Semester = require("../Model/Semester");
const Course = require("../Model/Course");
const Exam = require("../Model/Exam");
const {transaction} = require("../DBConfig/Config");

const saveExamForm = async (req, res) => {
    const {name,regiNo,examRoll,semester,course,bill,type} = req.body;

    const t = await transaction();

    const { id, email } = req.user;
    console.log(email);

    if (!name || !regiNo || !examRoll || !semester || !course || !bill) {
        return res.status(400).json({error: 'Please enter a valid name'});
    }

    try{
        const user = await User.findOne({
            where:{
                id:id,
                email:email,
            }
        })
        if(!user){
            return res.status(404).json({error: "User not found"});
        }

        const newSemester = await Semester.create({
            bill:bill,
            name:semester,
            userId:id,
        },{transaction:t})

        const newCourse = await Course.create({
            ...course,
            semesterId:newSemester.id,
            userId:id
        },{transaction:t})

        const newExam = await Exam.create({
            type:type,
            examRoll:examRoll,
            regiNo:regiNo,
            userId:id,
            semesterId:newSemester.id,
        },{transaction:t})

        await t.commit();

        return res.status(201).json({newSemester:newSemester,newExam:newExam,newCourse:newCourse})
    }
    catch (err){
        await t.rollback();
        console.log(err);
        return res.status(500).json({error: 'Something went wrong'});
    }
}

module.exports = {saveExamForm}