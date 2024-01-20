const router = require("express").Router();
const productController = require("../controller/product");
// router.post("/", [verifyAccessToken, isAdmin], productController.createProduct);
router.get("/:id", productController.getProductById);
router.get("/", productController.getProducts);

module.exports = router;
