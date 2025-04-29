const { body } = require("express-validator")

class AuthValidation {
    static RegisterUser = [
        body("name").notEmpty().withMessage("Name cannot be Empty"),
        body("email").isEmail().withMessage("Email must be Valid").notEmpty().withMessage("Email cannot be Empty"),
        body("password").isLength({min:6}).withMessage("Password include minimum of 6 characters").notEmpty().withMessage("Password is Required")
    ]
}

module.exports = AuthValidation