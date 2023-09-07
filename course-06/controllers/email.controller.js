const emailService = require("../services/email.service");

const send = async (req, res) => {
  try {
    const result = await emailService.send(req.body);
    return res.json({
      status: "success",
      data: result,
      message: "Email sent successfully",
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      data: err,
      message: "Failed to send an email",
    });
  }
};

module.exports = {
  send,
};
