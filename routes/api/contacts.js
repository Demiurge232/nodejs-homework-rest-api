const express = require("express");

const controllers = require("../../controllers/contacts");

const {
  validateBody,
  isValidId,
  authenticate,
} = require("../../middlewares/index");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, controllers.listContacts);

router.get("/:contactId", authenticate, isValidId, controllers.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  controllers.addContact
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  controllers.removeContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  controllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateStatusContactSchemas),
  controllers.updateStatusContact
);

module.exports = router;
