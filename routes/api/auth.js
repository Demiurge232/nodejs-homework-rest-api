const express = require("express");

const controller = require("../../controllers/auth");

const router = express.Router();

const {
  validateBody,
  authenticate,
  upload,
} = require("../../middlewares/index");

const { schemas } = require("../../models/user");

router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  controller.register
);

router.post(
  "/users/login",
  validateBody(schemas.loginSchema),
  controller.login
);

router.post("/users/logout", authenticate, controller.logout);

router.get("/users/current", authenticate, controller.getCurrent);

router.patch(
  "/users",
  authenticate,
  validateBody(schemas.updateUserSubscriptionSchema),
  controller.updateUserSubscription
);

router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  controller.updateUserAvatar
);

router.get("/users/verify/:verificationToken", controller.verifyEmail);

router.post(
  "/users/verify",
  validateBody(schemas.emailSchema),
  controller.resendVerifyEmail
);

module.exports = router;
