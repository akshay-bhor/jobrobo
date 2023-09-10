const { validationResult, check } = require("express-validator");

const validateUserAuthInput = async (req, res, next) => {
  try {
    await check("email")
      .exists()
      .trim()
      .isEmail()
      .normalizeEmail()
      .withMessage("Please enter valid username or email!")
      .run(req);

    await check("pass")
      .exists()
      .trim()
      .isString()
      .isLength({ min: 8, max: 20 })
      .withMessage("Minimum password length is 8!")
      .run(req);

    const errs = validationResult(req);
    if (!errs.isEmpty()) {
      const err = new Error("Validation Error!");
      err.statusCode = 400;
      err.data = errs.array();
      throw err;
    }

    next()

  } catch (err) {
    next(err);
  }
};

module.exports = {
  validateUserAuthInput,
};
