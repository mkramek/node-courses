const nodemailer = require("nodemailer");

require("dotenv").config();

const config = {
  pool: true,
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};

const send = async ({ to, subject, text }) => {
  const transporter = nodemailer.createTransport(config);
  const emailOptions = {
    from: process.env.MAIL_USER,
    to,
    subject,
    text,
  };
  return await transporter.sendMail(emailOptions);
};

module.exports = {
  send,
};
