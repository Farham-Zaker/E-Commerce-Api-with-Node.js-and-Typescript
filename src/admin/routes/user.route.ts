import { Router } from "express";
import userController from "../controllers/user.controller";
import userValidator from "../validators/user.validator";
import validationResults from "../../validators/validationResults";
const router = Router();

router.post(
  "/create",
  userValidator.createOrder(),
  validationResults,
  userController.createUser
);
router.post(
  "/upload-image",
  userValidator.uploadUserImage(),
  validationResults,
  userController.uploadImage
);
router.get(
  "/get",
);

export default router;
