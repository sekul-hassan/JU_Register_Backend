const User = require("./../Model/User");
const Semester = require("./../Model/Semester");
const Notification = require("./../Model/Notification");
const Exam = require("./../Model/Exam");
const Course = require("../Model/Course");


const association = async ()=>{
// 1. One User -> Many Semesters
    User.hasMany(Semester, { foreignKey: 'userId' });
    Semester.belongsTo(User, { foreignKey: 'userId' });

// 2. One User -> Many Notifications
    User.hasMany(Notification, { foreignKey: 'userId' });
    Notification.belongsTo(User, { foreignKey: 'userId' });

// 3. One User -> Many Exams
    User.hasMany(Exam, { foreignKey: 'userId' });
    Exam.belongsTo(User, { foreignKey: 'userId' });

// 4. One User -> Many Courses
    User.hasMany(Course, { foreignKey: 'userId' });
    Course.belongsTo(User, { foreignKey: 'userId' });

// 5. One Semester -> Many Courses
    Semester.hasMany(Course, { foreignKey: 'semesterId' });
    Course.belongsTo(Semester, { foreignKey: 'semesterId' });

// 6. One Semester -> One Exam
    Semester.hasOne(Exam, { foreignKey: 'semesterId' });
    Exam.belongsTo(Semester, { foreignKey: 'semesterId' });

}

module.exports = association;