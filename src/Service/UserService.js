const User = require("../Model/User");
const {sign} = require("jsonwebtoken");

const secret = "sekul"

const saveUser = async (req, res) => {
    const {name, email, password } = req.body;

    if (!email || !password || !name) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {

        const user = await User.findOne({ where: { email } });
        if (user) {
            return res.status(409).json({ error: "Email already exists" });
        }

        const newUser = await User.create({name, email, password });
        return res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (err) {
        console.error("Error saving user:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email + password);
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ where: { email } });
        if (!user || user.password !== password) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const token = sign({ id: user.id, email: user.email, user: { name: user.name } }, secret, {
            expiresIn: "1h", // Token expires in 1 hour
        });

        res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};


module.exports = { saveUser,login };
