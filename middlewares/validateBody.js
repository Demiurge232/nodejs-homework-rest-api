const HttpError = require("../helpers/HttpError");
const schemas = require("../schemas/contacts");
const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schemas.addSchema.validate(req.body);
    if (error) {
      next(HttpError(400, `missing  ${error.message}`));
    }
  };
  return func;
};

module.exports = validateBody;
