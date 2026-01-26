const nodemailer = require('nodemailer');

const sendResetEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const resetUrl = `http://localhost:5173/reset-password/${token}`;

  const message = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset',
    html: `Click <a href=${resetUrl}>here</a> to reset your password (expires in 10min)`
  };

  await transporter.sendMail(message);
};

module.exports = sendResetEmail;
