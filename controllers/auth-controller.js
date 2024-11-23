const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).send("welcome to admin panel 2");

    } catch (error) {
        console.log(error);
    }
}

//registration logic
const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ msg: "email is already exist" });
        }

        const userCreated = await User.create({ username, email, phone, password });


        res.status(200).json({ message: userCreated, token: await userCreated.generateToken(), userId: userCreated._id.toString(), });

    } catch (error) {
        res.status(400).send({ msg: "page not found" })
    }
}



//sign Logic
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        console.log(userExist.password,"200");

        const passwordMatch = await userExist.comparePassword(password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = await userExist.generateToken();
        res.status(200).json({ 
            message: "Sign-in successful", 
            token,
            userId: userExist._id.toString(),
        });
    } catch (error) {
        console.error("Error in login:", error);
       next(error);
        // res.status(500).json({ message: "Internal server error" });
    }
};


module.exports = { home, register, login };