const sequelize = require("../DBConfig/Config");
const {DataTypes} = require("sequelize");


const User = sequelize.define("User", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING,defaultValue: "user"},
})

module.exports = User