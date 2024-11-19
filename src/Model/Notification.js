const sequelize = require("../DBConfig/Config");
const {DataTypes} = require("sequelize");

const Notification = sequelize.define("Notification", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    placeHolder: {type: DataTypes.STRING},
    status: {type: DataTypes.BOOLEAN},
    description: {type: DataTypes.STRING},
},{timestamps: true});

module.exports = Notification;