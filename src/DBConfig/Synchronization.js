const association = require("../DBConfig/Association")
const sequelize = require("../DBConfig/Config");

const synchronization = async ()=>{
    await association();
    await sequelize.sync({alter:true});
}

module.exports = synchronization;