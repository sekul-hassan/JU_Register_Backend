const sequelize = require("../DBConfig/Config");
const {DataTypes} = require("sequelize");

const Notification = sequelize.define("Notification", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    semester: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    departmentStatus: {type: DataTypes.BOOLEAN},
    hallStatus: {type: DataTypes.BOOLEAN},
    registerStatus: {type: DataTypes.BOOLEAN},
},{timestamps: true});

module.exports = Notification;