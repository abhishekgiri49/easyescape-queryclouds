const Config = require("./../config/config.js");
const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, reply_to) => {
  const transporter = nodemailer.createTransport({
    host: Config.EMAIL_HOST,
    auth: {
      user: Config.EMAIL_USER,
      pass: Config.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: Config.EMAIL_USER,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  // Send Email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = { sendEmail };
