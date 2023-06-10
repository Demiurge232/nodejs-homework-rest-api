const express = require("express");

const controllers = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", controllers.listContacts);

router.get("/:contactId", isValidId, controllers.getContactById);

router.post("/", validateBody(schemas.addSchema), controllers.addContact);

router.delete("/:contactId", isValidId, controllers.removeContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  controllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateStatusContactSchemas),
  controllers.updateStatusContact
);

module.exports = router;
