import User from "../models/User.js"
import { hashPassword, matchPassword } from "../utils/passwordUtils.js"
import { createJWT } from "../utils/tokenUtils.js"

export const userRegister = async (req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password){
        return res.status(400).json({messgae:"Please Provide all Input Feilds"})
    }
    const userAlready = await User.findOne({email})

    if(userAlready){
        return res.status(400).json({message:"User Already Register"})
    }
    const hashedPwd = await hashPassword(password)
    const user = await User.create({name, email, password: hashedPwd})
    res.status(200).json({user})
}

export const userLogin = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(404).json({message: "user not register or wrong email"})
    }
    const isMatched = await matchPassword(password, user.password)
    if(!isMatched){
        return res.status(401).json({message: "Password Wrong"})
    }
    const token = createJWT({_id: user._id})
    res.status(200).json({user:{
        name:user.name, 
        email:user.email, 
        _id: user._id
    },message:"User Login Successfully", token})
} 