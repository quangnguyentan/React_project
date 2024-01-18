import React from "react";
import { Button } from "../../../atoms";
import { CiStar } from "react-icons/ci";
import { useSelector } from "react-redux";
import path from "../../../../utils/path";
import { Link } from "react-router-dom";

export default function PriceProductCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <>
      {cartItems.map((product) => (
        <div className="w-[28%] flex flex-col m-4 ml-0 gap-2">
          <div className=" bg-white  rounded-xl p-4 flex-col flex gap-4">
            <div className="flex items-center">
              <div className="w-[40px] h-[40px]">
                <img
                  src="https://vcdn.tikicdn.com/cache/w100/ts/seller/81/27/4e/bac5296e1c315488f3e4ba3d61c4581c.jpg.webp"
                  alt=""
                />
              </div>
              <div>
                <a href="https://tiki.vn/cua-hang/gu-bag-official-store?source_screen=product_detail&source_engine=organic">
                  <span className="font-medium text-base">
                    Gu Bag Official Store
                  </span>
                </a>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">4.6</span>
                  <CiStar fill="black" color="black" />
                  <span className="font-medium text-gray-400">
                    (3.0k+ đánh giá)
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-[40px] h-[40px]"
                src="https://salt.tikicdn.com/cache/280x280/ts/product/d0/1c/e3/cdbf0218b586a07a659b6f63f380a258.jpg.webp"
                alt=""
              />
              <span className="font-normal text-base">Màu ghi</span>
            </div>
          </div>
          <div className="bg-white  rounded-xl p-4 flex-col flex gap-4">
            <div className="flex justify-between text-gray-400">
              <span className="">Tạm tính</span>
              <div className="flex  text-black">
                224.100 <sub>₫</sub>
              </div>
            </div>

            <div className="flex justify-between text-gray-400">
              <span>Tổng tiền</span>
              <div className="flex flex-col ">
                <div className="flex justify-end text-red-500  text-2xl">
                  {product.quantity * product.price}
                  <sub className="">đ</sub>
                </div>
                <span className="font-light text-xs">
                  (Đã bao gồm VAT nếu có)
                </span>
              </div>
            </div>
          </div>
          <Link to={`/${path.CHECKOUT}${path.PAYMENT}`}>
            <div className="flex flex-col gap-2">
              <Button name="Mua ngay (1)" fw />
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
