const { User } = require('../models');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user){
      await User.create({ username, password });
      res.status(201).json({ message: 'Register berhasil.' });
    }
    else{
      res.status(401).json({ message: 'Username telah dibuat' });
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });


     if (!user) {
      return res.status(401).json({ error: 'Username tidak tersedia' });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Password tidak tersedia' });
    }

    const token = jwt.sign({ userId: user.id }, 'secretkey', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = { register, login };