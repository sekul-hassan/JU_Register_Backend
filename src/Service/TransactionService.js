const User = require('../Model/User');
const Transaction = require("../Model/Transaction");

const getAllTransactions = async (req,res) => {
    const email = req.headers['email'];

    if(!email){
        return res.status(400).send({message: 'Email or password is required'});
    }

   try{
       const users = await User.findOne({
           where: { email: email },
       });

       if(!users){
           return res.status(404).send({message: 'No users found'});
       }

       const id = users.id;

       const transactions = await Transaction.findAll({
           where:{
               userId: id,
           }
       });

       return res.status(200).send({transactions});
   }catch(err){
        return res.status(500).send({error: err});
   }
}

module.exports = { getAllTransactions };