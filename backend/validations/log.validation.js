const { body } = require("express-validator");

const fetchLogsRequestValidate = [
  body("path")
    .exists()
    .withMessage("path is required")
    .isString()
    .withMessage("path should be string")
    .notEmpty()
    .withMessage("path should be an actual path"),

  body("start")
    .optional()
    .if((value) => value !== undefined)
    .isInt()
    .withMessage("start should be  a valid number!"),
];

module.exports = {
  fetchLogsRequestValidate,
};
