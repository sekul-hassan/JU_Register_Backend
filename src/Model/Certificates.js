const sequelize = require("../DBConfig/Config");
const {DataTypes} = require("sequelize");

const Certificates = sequelize.define("Certificates", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    examRoll: {type: DataTypes.STRING},
    regiNo: {type: DataTypes.STRING},
    session: {type: DataTypes.STRING},
    semester: {type: DataTypes.STRING},
    examYear: {type: DataTypes.STRING},
});

module.exports = Certificates;