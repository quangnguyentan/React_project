import * as userService from "../services/userService";
import User from "../models/user";

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

export const updateCard = async (req, res) => {
  try {
    const { _id } = req.currentUser;
    const { pid, quantity = 1, color } = req.body;
    if (!pid || !color) throw new Error("Missing inputs");
    const user = await User.findById(_id).select("cart");
    console.log(user);
    const alreadyProduct = user?.cart?.find(
      (el) => el.product.toString() === pid
    );
    console.log(alreadyProduct);
    if (alreadyProduct) {
      const response = await User.updateOne(
        { cart: { $elemMatch: alreadyProduct } },
        { $set: { "cart.$.quantity": quantity } },
        {
          new: true,
        }
      );
      return res.status(200).json({
        success: response ? true : false,
        mes: response ? "Updated your cart" : "Some thing went wrong",
      });
    } else {
      const response = await User.findByIdAndUpdate(
        _id,
        {
          $push: { cart: { product: pid, quantity, color } },
        },
        {
          new: true,
        }
      );
      console.log(response);
      return res.status(200).json({
        success: response ? true : false,
        mes: response ? "Updated your cart" : "Cannot find user",
      });
    }
  } catch (error) {
    print("Faild at " + error);
  }
};

export const removeProductCard = async (req, res) => {
  try {
    const { _id } = req.currentUser;
    const { pid } = req.params;
    const user = await User.findById(_id).select("cart");
    const alreadyProduct = user?.cart?.find(
      (el) => el.product.toString() === pid
    );
    if (!alreadyProduct)
      return res.status(200).json({
        success: true,
        mess: "Updated your cart",
      });

    const response = await User.findByIdAndUpdate(
      _id,
      {
        $pull: { cart: { product: pid } },
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      success: response ? true : false,
      mes: response ? "Updated your cart" : "Cannot find user",
    });
  } catch (error) {
    console.log("Faild at " + error);
  }
};
