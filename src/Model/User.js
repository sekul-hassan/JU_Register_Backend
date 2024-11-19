const sequelize = require("../DBConfig/Config");
const {DataTypes} = require("sequelize");


const User = sequelize.define("User", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING,defaultValue: "user"},
})

module.exports = User