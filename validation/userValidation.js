const {body} = require('express-validator')

const validation = [
    body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .isLength({min:3})
    .withMessage("Name must be atleast 3 character long"),

    body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),

    body("age")
    .notEmpty()
    .withMessage("Age is required"),
];
module.exports = {validation}