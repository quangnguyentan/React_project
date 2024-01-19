import React, { useState } from "react";
import icons from "../../../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllCart,
  removeToCart,
  updateQuantityAction,
} from "../../../../stores/actions/cartAction";
import { formatMoney, totalPrice } from "../../../../utils/helper";
const { RiDeleteBin6Line, GoPlus, FiMinus } = icons;
function ItemProductCart(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const updateQuantity = (productId, newQuantity) => {
    // Dispatch the updateQuantityAction to update the quantity in the Redux store
    dispatch(updateQuantityAction(productId, newQuantity));
  };

  const handleIncrement = (productId) => {
    console.log(cartItems);
    const product = cartItems.find((item) => item.id === productId);
    if (product) {
      const newQuantity = product.quantities + 1;
      updateQuantity(productId, newQuantity);
    }
  };
  const handleDecrement = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    if (product && product.quantities > 1) {
      const newQuantity = product.quantities - 1;
      updateQuantity(productId, newQuantity);
    }
  };
  const handleRemoveCart = (productId) => {
    dispatch(removeToCart(productId));
  };

  return (
    <>
      {cartItems.map((product) => (
        <div className="m-4 flex " key={product.id}>
          <div className="bg-white w-full p-4 rounded-xl">
            <div className="flex justify-between items-center ">
              <div className=" w-[324px] gap-2 flex ">
                <input type="checkbox" />
                <div className="w-[80px] h-[80px]">
                  <img src={product.img} alt="" />
                </div>
                <div className="flex flex-col gap-1 w-[202px]">
                  <span className="overflow-ellipsis overflow-hidden text-sm font-normal">
                    {product.title}
                  </span>
                  <span className="text-xs text-gray-400">{product.color}</span>
                  <div className="flex gap-2 text-xs  font-normal">
                    <span className="w-[32px] h-[16px]">
                      {/* <CiDeliveryTruck className="w-full" /> */}
                      <img
                        src="https://salt.tikicdn.com/cache/w96/ts/tka/65/be/89/d0c3208134f19e4bab8b50d81b41933a.png"
                        alt=""
                      />
                    </span>
                    <span> Giao thứ 2, 15/01</span>
                  </div>
                </div>
              </div>
              <div className="flex text-black font-bold">
                {formatMoney(product?.price)}
                <sub>₫</sub>
              </div>
              <div>
                <div className="flex">
                  <div className="w-[23px] h-[24px] rounded-l-sm border pl-[2px] ">
                    <button
                      className=""
                      onClick={() => handleDecrement(product.id)}
                    >
                      <FiMinus />
                    </button>
                  </div>
                  <div className="w-[40px] h-[24px] border">
                    <span className="flex justify-center">
                      {product.quantities}
                    </span>
                  </div>
                  <div className="w-[23px] h-[24px] rounded-r-sm border pl-[2px] ">
                    <button
                      className=""
                      onClick={() => handleIncrement(product.id)}
                    >
                      <GoPlus />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex font-bold text-red-500 ">
                {formatMoney(totalPrice(product.price, product.quantities))}
                <sub>₫</sub>
              </div>
              <span className="cursor-pointer">
                <RiDeleteBin6Line
                  onClick={() => handleRemoveCart(product.id)}
                />
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemProductCart;
