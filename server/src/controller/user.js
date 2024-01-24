import * as userService from "../services/userService";

export const getCurrent = async (req, res) => {
  const { currentUser } = req;
  try {
    if (!currentUser?.id) {
      res.status(400).json({
        err: 1,
        msg: "missing input",
      });
    }
    const response = await userService.getCurrentService(currentUser?.id);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "Failed at auth controller" + error,
    });
  }
};
export const placeOrder = async (req, res) => {
  const { currentUser, body } = req;
  console.log(body, "data");

  try {
    if (!currentUser?.id) {
      return res.status(400).json({
        err: 1,
        msg: "missing input",
      });
    }

    // Kiểm tra xem body.cart đã là đối tượng hay chưa
    const cartObject = typeof body.cart === 'object' ? body.cart : JSON.parse(body.cart);

    // Kiểm tra nếu cartObject không phải là mảng
    if (!Array.isArray(cartObject)) {
      return res.status(400).json({
        err: 1,
        msg: "Cart should be an array",
      });
    }

    // Gọi hàm xử lý đặt hàng từ userService sử dụng method PUT
    const response = await userService.placeOrderService(currentUser?.id, cartObject );

    // Log thông tin về sản phẩm từ body
    cartObject.forEach((item, index) => {
      const productInfo = item.product;
      console.log(`Thông tin sản phẩm ${index + 1}:`, productInfo);
    });

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed to place order" + error,
    });
  }
};
