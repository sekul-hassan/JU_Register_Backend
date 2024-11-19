const sequelize = require("../DBConfig/Config");
const {DataTypes} = require("sequelize");

const Semester = sequelize.define('Semester', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
});

module.exports = Semester;