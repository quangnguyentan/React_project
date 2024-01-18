import React from "react";
import { Button } from "../../atoms";
import { Link, Navigate } from "react-router-dom";
import path from "../../../utils/path";
import icons from "../../../utils/icons";
import ItemProductCart from "./ItemProductCart";
import { productList } from "../../../utils/datatest";
import PriceProductCart from "./PriceProductCart";
import { useSelector } from "react-redux";
const { CiStar, RiDeleteBin6Line } = icons;
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="w-main flex flex-col  ">
      <div className="w-full flex">
        <div className="ml-4 w-[70%] flex flex-col">
          <div className="flex flex-col w-full">
            <h3 className="text-xl font-medium p-4 pb-0 ">GIỎ HÀNG</h3>

            {cartItems.length > 0 ? (
              <div className="m-4 flex  ">
                <div className="bg-white w-full p-4 rounded-xl">
                  <div className="flex justify-between items-center ">
                    <div className="flex gap-2 w-[324px] ">
                      <input type="checkbox" />
                      <span>Tất cả </span>
                      <span>(2 sản phẩm)</span>
                    </div>
                    <span>Đơn giá</span>
                    <span>Số lượng</span>
                    <span>Thành tiền</span>
                    <span>
                      <RiDeleteBin6Line />
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col ml-[2%] w-[96%] h-[250px] items-center bg-white border rounded-lg justify-center">
                  <img
                    className="w-[10%] h-[50]"
                    src="https://salt.tikicdn.com/ts/upload/43/fd/59/6c0f335100e0d9fab8e8736d6d2fbcad.png"
                  ></img>
                  <p className="font-bold">Giỏ hàng trống</p>
                  <p>
                    Bạn tham khảo thêm các sản phẩm được Tiki gợi ý bên dưới
                    nhé!
                  </p>
                </div>
              </>
            )}
            {cartItems.length > 0 && (
              <ItemProductCart productList={productList}></ItemProductCart>
            )}
          </div>
          <div className="w-[96%] m-4 bg-white rounded-lg">
            <div className="m-4 flex ">
              <div className="bg-white w-full p-4 rounded-xl flex flex-col gap-4 ">
                <h3 className="font-medium">Sản phẩm mua kèm</h3>
                <div className="flex gap-2">
                  <div className="flex gap-2">
                    <Link to={`/${path.PRODUCT_INFO}`}>
                      <div className="w-[142px]  hover:rounded-lg h-[240px] hover:bg-gray-100 cursor-pointer flex flex-col gap-2">
                        <img
                          className="rounded-t-lg w-full h-[148px]"
                          src="https://salt.tikicdn.com/cache/280x280/ts/product/5d/d0/f6/a00d7cdc0d8c56556263458b87f94e81.jpg.webp"
                          alt="home_product"
                        />
                        <div className="px-2 flex flex-col w-full h-[80px]">
                          <p className="text-xs font-light h-[36px] text-gray-800 overflow-hidden break-words whitespace-break-spaces ">
                            Ba lô nam thời trang cao cấp phong cách mới 15,6
                            acasdsdadsadasddadas
                          </p>
                          <span className="">
                            <CiStar color="yellow" size={12} />
                          </span>
                          <div className="flex">
                            <div className="font-medium">441.000</div>
                            <sup className="top-[0.5em]">đ</sup>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/${path.PRODUCT_INFO}`}>
                      <div className="w-[142px]  hover:rounded-lg h-[240px] hover:bg-gray-100 cursor-pointer flex flex-col gap-2">
                        <img
                          className="rounded-t-lg w-full h-[148px]"
                          src="https://salt.tikicdn.com/cache/280x280/ts/product/5d/d0/f6/a00d7cdc0d8c56556263458b87f94e81.jpg.webp"
                          alt="home_product"
                        />
                        <div className="px-2 flex flex-col w-full h-[80px]">
                          <p className="text-xs font-light h-[36px] text-gray-800 overflow-hidden break-words whitespace-break-spaces ">
                            Ba lô nam thời trang cao cấp phong cách mới 15,6
                          </p>
                          <span className="">
                            <CiStar color="yellow" size={12} />
                          </span>
                          <div className="flex">
                            <div className="font-medium">441.000</div>
                            <sup className="top-[0.5em]">đ</sup>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {cartItems.length > 0 && <PriceProductCart></PriceProductCart>}
      </div>
    </div>
  );
};

export default Cart;
