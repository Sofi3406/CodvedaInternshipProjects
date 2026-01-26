const express = require('express');
const { register, login, forgotPassword, resetPassword, getMe, logout } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.patch('/reset-password/:resetToken', resetPassword);
router.get('/me', protect, getMe);
router.post('/logout', protect, logout);  

module.exports = router;
