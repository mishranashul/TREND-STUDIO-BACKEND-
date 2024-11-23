const Conctact = require("../models/contact-model");

const  conatctForm = async(req, res) =>{
    try{
        const response = req.body;
        await Conctact.create(response);
        return res.status(200).json({message : "meassge send successfully"});
    } catch(error){
        return res.status(500).json({message : "meassge not delivered"});
    }
};

module.exports = conatctForm;