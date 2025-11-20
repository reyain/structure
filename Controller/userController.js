import { getUserById } from "../Model/userModel.js";

export const getAllUser = (req, res) => {
    try {

        const { id }  = req.params;
        const users = getUserById(id);

        if (!users || users.length ===0 ){
            return res.status(404).json({ message: "No users found" });
        }

        res.status(200).json(users);

    } catch{

        res.status(500).json({message: "Server Error"});

    }
}