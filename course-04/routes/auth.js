const express = require("express");
const router = express.Router();
const Joi = require("joi");

const responseSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

/* POST home page. */
router.post("/login", function (req, res, next) {
  const validatedBody = responseSchema.validate(req.body);
  if (validatedBody.error) {
    res.render("error", {
      message: validatedBody.error.message,
      error: { ...validatedBody.error, status: 400 },
    });
  } else {
    res.render("login", {
      title: "Express",
      email: validatedBody.value.email,
      password: validatedBody.value.password,
    });
  }
});

module.exports = router;
