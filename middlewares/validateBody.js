const { HttpError } = require("../helpers/index");
const { schemas } = require("../models/contact");
const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schemas.addSchema.validate(req.body);
    if (error) {
      next(HttpError(400, `missing  field ${error.message}`));
    }
  };
  return func;
};

module.exports = validateBody;
