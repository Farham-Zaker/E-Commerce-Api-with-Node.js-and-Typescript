import { Router } from "express";
import paymentController from "../controllers/payment.controller";
import paymentValidator from "../validators/payment.validator";
import validationResults from "../../validators/validationResults";
const router = Router();

router.post(
  "/create",
  paymentValidator.createPayment(),
  validationResults,
  paymentController.createPayment
);
router.get("/get", paymentController.getAllPaynent);


export default router;
