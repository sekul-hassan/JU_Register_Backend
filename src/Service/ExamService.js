const { sequelize } = require("../DBConfig/Config");  // Ensure correct import of sequelize instance
const User = require("../Model/User");
const Semester = require("../Model/Semester");
const Course = require("../Model/Course");
const Exam = require("../Model/Exam");
const Transaction = require("../Model/Transaction");

const saveExamForm = async (req, res) => {
    const {name, regiNo, examRoll, semester, course, bill, type} = req.body;
    console.log(req.body);

    const id = 8;  // Replace with dynamic user id if needed
    const email = "Sakib@gmail.com";  // Replace with dynamic email if needed

    if (!name || !regiNo || !examRoll || !semester || !course || !bill) {
        console.log("not data");
        return res.status(400).json({error: 'Please enter a valid name'});
    }

    try {
        const user = await User.findOne({
            where: {id: id, email: email},
        });
        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        // Ensure 'semester' is a string (or modify how it's passed)
        const semesterName = Array.isArray(semester) ? semester.join(', ') : semester;  // Convert array to string if necessary

        // Create new semester, course, and exam within the transaction
        const newSemester = await Semester.create({
            bill: bill,
            name: semesterName,  // Ensure 'name' is a string
            userId: id,
        });

        // Adjust logic if 'course' needs to be handled separately
        const newCourse = await Course.create({
            name: Array.isArray(course) ? course.join(', ') : course,  // Handle 'course' if it's an array
            semesterId: newSemester.id,
            userId: id,
        });

        const newExam = await Exam.create({
            type: type,
            examRoll: examRoll,
            regiNo: regiNo,
            userId: id,
            semesterId: newSemester.id,
        });
        const transaction = await Transaction.create({
            userId: id,
            title: "Your semester bill is created successfully",
            card:"Payment is created by card",
            amount: bill
        })
    console.log(req.clientSecret);
        return res.status(201).json({newSemester: newSemester,transaction:transaction, newExam: newExam, newCourse: newCourse,clientSecret:req.clientSecret});
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { saveExamForm };
