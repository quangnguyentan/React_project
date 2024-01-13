import React from "react";
import icons from "../../../utils/icons";
import { Link } from "react-router-dom";
import path from "../../../utils/path";
const { CiStar } = icons;
const Product = () => {
  return (
    <>
      <div className="w-full">
        <h3 className="py-4 font-medium text-lg">Giá tốt hôm nay</h3>
        <Link to={`/${path.PRODUCT_INFO}`}>
          <div className="w-[150px] border rounded-lg h-[265px] bg-gray-100 flex flex-col gap-2 cursor-pointer  ">
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
              <div className="flex">
                <div className="font-medium">441.000</div>
                <sup className="top-[0.5em]">đ</sup>
              </div>
            </div>
            <div className="border-t-2 py-2 w-full h-[35px] px-2">
              <p className="font-medium text-gray-400 text-xs">
                Giao thứ 2, 15/01
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-full mb-8">
        <h3 className="py-4 font-medium text-lg">Sản phẩm bán chạy</h3>
        <div className="flex gap-2">
          <Link to={`/${path.PRODUCT_INFO}`}>
            <div className="w-[150px] border rounded-lg h-[304px] bg-gray-100 cursor-pointer">
              <img
                className="rounded-t-lg w-full h-[148px]"
                src="https://salt.tikicdn.com/cache/280x280/ts/product/5d/d0/f6/a00d7cdc0d8c56556263458b87f94e81.jpg.webp"
                alt="home_product"
              />
              <div className="py-[4px] px-2">
                <img
                  className="w-[89p] h-[20px]"
                  src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                  alt=""
                />
              </div>
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
              <div className="border-t-[1px] py-2 w-[135px] h-[35px]  mx-2">
                <p className="font-medium text-gray-400 text-xs">
                  Giao thứ 2, 15/01
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/${path.PRODUCT_INFO}`}>
            <div className="w-[150px] border rounded-lg h-[304px] bg-gray-100 cursor-pointer">
              <img
                className="rounded-t-lg w-full h-[148px]"
                src="https://salt.tikicdn.com/cache/280x280/ts/product/5d/d0/f6/a00d7cdc0d8c56556263458b87f94e81.jpg.webp"
                alt="home_product"
              />
              <div className="py-[4px] px-2">
                <img
                  className="w-[89p] h-[20px]"
                  src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
                  alt=""
                />
              </div>
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
              <div className="border-t-[1px] py-2 w-[135px] h-[35px]  mx-2">
                <p className="font-medium text-gray-400 text-xs">
                  Giao thứ 2, 15/01
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
