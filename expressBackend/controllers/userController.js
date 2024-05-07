const User = require('../models/userSchema')
 

const createUser = async(req, res)=>{
    const {first_name, last_name, email, password} = req.body;

    let emptyFields = [];
    if (!first_name){
        emptyFields.push('First Name')
    }

    if(!last_name){
        emptyFields.push('Last Name')
    }

    if(!email){
        emptyFields.push('Email')
    }

    if(!password){
        emptyFields.push('password')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({error:"All field must filled.", emptyFields})
    }

    try {
        const user = await User.create({first_name, last_name, email, hash_password:password 

        })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

module.exports = {
    createUser
} 