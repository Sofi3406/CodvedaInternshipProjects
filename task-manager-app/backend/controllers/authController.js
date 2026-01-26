const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendResetEmail = require('../utils/sendResetEmail');

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

// ✅ 1. register
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, secure: false, maxAge: 30 * 24 * 60 * 60 * 1000 });
    res.status(201).json({ user: { id: user._id, name, email } });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ 2. login  
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, secure: false, maxAge: 30 * 24 * 60 * 60 * 1000 });
      res.json({ user: { id: user._id, name: user.name, email } });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ 3. getMe - TOP LEVEL (not nested!)
exports.getMe = async (req, res) => {
  try {
    res.json({ user: req.user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ 4. forgotPassword
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Email not found' });
    
    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
    await user.save();
    
    await sendResetEmail(user.email, resetToken);
    res.json({ message: 'Reset email sent' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.logout = async (req, res) => {
  res.cookie('jwt', '', { 
    httpOnly: true, 
    secure: false, 
    expires: new Date(0) 
  });
  res.status(200).json({ message: 'Logged out successfully' });
};


// ✅ 5. resetPassword
exports.resetPassword = async (req, res) => {
  const { password } = req.body;
  const { resetToken } = req.params;
  
  try {
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    const user = await User.findOne({ 
      resetPasswordToken: hashedToken, 
      resetPasswordExpire: { $gt: Date.now() } 
    });
    
    if (!user) return res.status(400).json({ message: 'Invalid token' });
    
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    
    const token = generateToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 });
    res.json({ user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
