import User from "../models/user";
require("dotenv").config();
export const getCurrentService = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await User.findOne({ id }).populate({
        path: "cart",
        populate: {
          path: "product",
          select: "title thumb prices",
        },
      });

      resolve({
        err: response ? 0 : 4,
        msg: response ? "OK" : "User not found",
        response,
      });
    } catch (error) {
      console.log(error);
      reject({
        err: 2,
        msg: "Failed at auth service",
      });
    }
  });

// Trong userService.js

export const placeOrderService = async (id, cart) => {
  try {
    // Sử dụng findOneAndUpdate để cập nhật thông tin đơn hàng
    const updatedUser = await User.findOneAndUpdate(
      { id: id },
      { $push: { cart: cart } },
      { new: true } // Trả về người dùng sau khi cập nhật
    );

    if (!updatedUser) {
      return { success: false, msg: "User not found" };
    }

    return { success: true, msg: "Order placed successfully" };
  } catch (error) {
    throw error;
  }
};

export const getAllService = () =>
  new Promise(async (resolve, reject) => {
    try {
      let response = await User.find();
      console.log(response);
      resolve({
        err: response ? 0 : 4,
        msg: response ? "OK" : "User not found",
        response,
      });
    } catch (error) {
      console.log(error);
      reject({
        err: 2,
        msg: "Failed at auth service",
      });
    }
  });
