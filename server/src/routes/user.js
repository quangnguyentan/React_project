import verifiToken from "../middlewares/verifyToken";
import * as userController from "../controller/user";
const router = require("express").Router();
router.get("/get-one", verifiToken, userController.getCurrent);
export default router;
