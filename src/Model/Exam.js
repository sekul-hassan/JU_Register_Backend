const sequelize = require("../DBConfig/Config");
const {DataTypes} = require("sequelize");

const Exam = sequelize.define("Exam", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.STRING, defaultValue: "regular"},
});

module.exports = Exam;