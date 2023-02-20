import User from "../models/User.js";

export const getUsers = async(req,res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch {
        res.status(404).json({message: error.message});
    }
};