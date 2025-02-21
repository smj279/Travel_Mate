const { Client,User } = require("../models");
const jwt = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({id}, process.env.SECRET, { expiresIn: '2d' })
  }

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Client.login(email, password);

        const token = createToken(user.id);
        
        res.status(201).json({ message: 'User logged in', email, user, token });
        console.log('User logged in' ,  user, token);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const signUpUser = async (req, res) => {
    try {
        console.log(req.body);
        const {name, email, password, phone ,address } = req.body;
        const user = await Client.signup(name, email, password, phone ,address);
       // const user = await User.signup(email, password);
        const token = createToken(user.id);

        res.status(201).json({ message: 'User signed up', email,user, token });
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
};



module.exports = {
    loginUser,
    signUpUser,
}