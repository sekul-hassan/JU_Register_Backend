const sequelize = require("../DBConfig/Config");
const {DataTypes} = require("sequelize");

const Transaction = sequelize.define("Transaction", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    card: {type: DataTypes.STRING},
    amount: {type: DataTypes.STRING},
},{timestamps: true});

module.exports = Transaction;