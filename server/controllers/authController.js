const bcrypt = require("bcryptjs");
const { createAccessToken } = require("../common/token");
const User = require("../models/users")

const authenticateUser = async (req, res, next) => {
  try {
    // Check if user exist
    const emailExists = await User.findOne({
      where: { email: req.body.email },
    });

    emailExists ? login(req, res, next) : register(req, res, next);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;

    // Search email
    const user = await User.findOne({
      where: { email: email },
    });

    if (user) {
      // Check if pass correct
      let storedPass = user.dataValues.pass;
      let passCorrect = await bcrypt.compare(pass, storedPass);

      if (passCorrect) {
        //Create token

        const token = await createAccessToken(user);

        // Return token
        res.status(200).json({
          msg: "success",
          token: token,
        });
      } else {
        let err = new Error("Email or Password Incorrect!");
        err.statusCode = 400;
        throw err;
      }
    } else {
      let err = new Error("Email or Password Incorrect!");
      err.statusCode = 400;
      throw err;
    }
  } catch (err) {
    next(err);
  }
};

const register = async (req, res, next) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;

    // Hash the password
    const hashedPass = await bcrypt.hash(pass, 12);

    // Create new user
    const createdUser = await User.create({
      email: email,
      pass: hashedPass,
      role: "user"
    });

    // Generate token
    const token = await createAccessToken(createdUser);

    // Return token
    res.status(200).json({
      msg: "success",
      token: token,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  authenticateUser,
};
