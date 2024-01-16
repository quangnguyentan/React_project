import React, { useState } from "react";
import icons from "../../../../utils/icons";
import { useSelector } from "react-redux";
import { productList } from "../../../../utils/datatest";
const { RiDeleteBin6Line, GoPlus, FiMinus } = icons;
function ItemProductCart(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);
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
                    {product.nameProduct}
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
                441.000
                <sub>₫</sub>
              </div>
              <div>
                <div className="flex">
                  <div className="w-[23px] h-[24px] rounded-l-sm border pl-[2px] ">
                    <button className="">
                      <FiMinus />
                    </button>
                  </div>
                  <div className="w-[40px] h-[24px] border">
                    <span className="flex justify-center">1</span>
                  </div>
                  <div className="w-[23px] h-[24px] rounded-r-sm border pl-[2px] ">
                    <button className="">
                      <GoPlus />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex font-bold text-red-500">
                441.000
                <sub>₫</sub>
              </div>
              <span>
                <RiDeleteBin6Line />
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemProductCart;
