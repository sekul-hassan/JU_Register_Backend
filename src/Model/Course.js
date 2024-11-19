const sequelize = require("../DBConfig/Config");
const {DataTypes} = require("sequelize");

const Course = sequelize.define("Course", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    courseId: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    credit: {type: DataTypes.STRING},
    payAble: {type: DataTypes.STRING},
});

module.exports = Course;