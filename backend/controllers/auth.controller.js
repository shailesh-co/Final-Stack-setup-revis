const User = require('../models/user.model');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async( req , res ) => {
      const { username, mobilenumber, email, password } = req.body;

      try {
        const existing = await User.findOne({ email });
         if (existing) return res.status(400).json({ message: 'Email already registered' });
            const hashedPassword = await bcrypt.hash(password, 10);
        //  const ismatch = await bcrypt.compare(password, User.password);
        //  if(!ismatch) return res.status(400).json({ message :'invalid emai and password'})
         const user = new User({ username, mobilenumber, email, password: hashedPassword });
            await user.save();
        res.status(201).json({ message: 'User registered successfully' });

      } catch (err) {
        res.status(500).json({ message: 'Registration failed', error: err.message });
      }
}

exports.login =async(req,res) => {
 const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token, user: { username: user.username, email: user.email, mobilenumber: user.mobilenumber } });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude password from response
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users', error: err.message });
  }
};


