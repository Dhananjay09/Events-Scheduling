const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  resetPassword,
} = require("../controllers/auth");

const { userSignupValidator } = require("../validators/auth");
const { runValidation } = require("../validators");

router.post("/signup", userSignupValidator, runValidation, signUp);

router.post("/account-activation", activateAccount);

router.post("/signin", signIn);


router.post("/reset-password", resetPassword);

module.exports = router;
