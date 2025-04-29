const AuthController = require("../controllers/Auth.controller")
const Validation = require("../middlewares/Validation")
const AuthValidation = require("../validations/Auth.validation")

const router = require('express').Router()

router.post("/register",AuthValidation.RegisterUser,Validation,AuthController.RegisterUser)

module.exports = router