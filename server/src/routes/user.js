// import { verifiToken } from "../middlewares/";
import { isAdmin, verifyToken } from "../middlewares/verifyToken";
import * as userController from "../controller/user";
const router = require("express").Router();
router.get("/get-one", verifyToken, userController.getCurrent);
router.put("/cart", verifyToken, userController.updateCard);
router.delete(
  "/remove-cart/:pid",
  verifyToken,
  userController.removeProductCard
);

module.exports = router;
