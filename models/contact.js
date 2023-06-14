const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers/index");
const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/)
    .required(),
  favorite: Joi.boolean(),
});

const updateStatusContactSchemas = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  updateStatusContactSchemas,
};

module.exports = {
  Contact,
  schemas,
};
