import User from "../models/userModel.js";

// create API
export const create = async(req, res) => {
    try {
        const userData = new User(req.body);

        if(!userData) {
            return res.status(404).json({
                msg: "User data not found"
            })
        }

        const savedData = userData.save();
        res.status(200).json({msg: "User Created Successfully!"});

    } catch (error) {
        res.status(500).json({error: error});
    }
}

// Get all data
export const getAll = async(req, res) => {
    try {
        const userData = await User.find();

        if(!userData) {
            return res.status(404).json({
                msg: "Users data not found"
            })
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

// find user 
export const getOne = async(req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist) {
            return res.status(404).json({msg: "User is not exist"});
        }
        res.status(200).json(userExist);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

// update user api
export const update = async(req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist) {
            return res.status(411).json({
                msg: "User not found"
            });
        }

        const updateData = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({msg: "User updated successfully!"});

    } catch (error) {
        res.status(500).json({error: error});
    }
}

// delete user
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist) {
            return res.status(404).json({msg: "User does not exist"});
        }
        await User.findByIdAndDelete(id);
        res.json({ msg: "User deleted Successfully!!!" });

    } catch (error) {
        res.status(500).json({error: error});
    }
}