import React from "react";
import icons from "../../../utils/icons";
import { Button } from "../../atoms";
import { Link } from "react-router-dom";
import path from "../../../utils/path";
const { CiStar, GoPlus, FiMinus } = icons;
const ProductCard = () => {
  return (
    <div className="w-main flex flex-col  ">
      <div className="w-full flex">
        <div className="ml-4 w-[70%] flex flex-col gap-4 ">
          <div className="flex gap-2 w-full">
            <div className="w-[50%] m-4 bg-white rounded-xl ">
              <div className="w-[368px] border m-6 rounded-xl h-[360px]">
                <img
                  src="https://salt.tikicdn.com/cache/750x750/ts/product/ff/1d/25/3cbab329640c3c26edbdd97eebb54659.jpg.webp"
                  alt=""
                />
              </div>
              <div className="m-6 w-full">
                <div className="w-[53px] h-[53px] border rounded-lg">
                  <img
                    className="w-[38px] h-[38px] text-center mx-2 my-2 "
                    src="https://salt.tikicdn.com/cache/100x100/ts/product/03/fb/8b/f6e8236ff07dce90bcff2e3e0310a68f.jpg.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-[43%] rounded-xl flex-col my-4  bg-white">
              <div className="flex p-4 pb-1 items-center gap-2">
                <img
                  className="w-[89px] h-[20px]"
                  src="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                  alt=""
                />
                <p className="font-normal text-sm">
                  Thương hiệu: <span className="text-blue-700">Gubag</span>
                </p>
              </div>
              <div className="px-4 flex flex-col gap-2">
                <h3 className="font-medium text-xl">
                  Balo 2 ngăn laptop sức chứa lớn, 2 ngăn lớn đựng được nhiều
                  đồ, nhỏ gọn, tiện lợi cho việc đi làm, chống sốc, chống nước
                </h3>
                <div className="flex items-center gap-2 text-sm ">
                  <div className="flex items-center gap-1 ">
                    <span className="font-medium">4.8</span>
                    <CiStar color="yellow" />
                  </div>
                  <span className="text-gray-400">(30)</span>
                  <div className="w-[1px] h-[12px] bg-gray-300 mx-[-1px] mt-[2px]"></div>
                  <span className="text-gray-400">Đã bán 110</span>
                </div>
                <div className="font-semibold text-2xl">
                  499.000
                  <sup>đ</sup>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[96%] m-4 bg-white rounded-lg">
            <div className="p-4">
              <h3>Khách hàng đánh giá</h3>
              <div className="my-2">
                <span className="">Tổng quan</span>
              </div>

              <div className="flex flex-col gap-1 mb-2">
                <div className="flex items-center gap-4">
                  <span>4.8</span>
                  <CiStar />
                </div>
                <span>(9) đánh giá</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
                <div className="flex">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[28%] flex flex-col m-4 ml-0  gap-2">
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
            <div className="flex flex-col  gap-2">
              <span className="font-medium">Số lượng</span>
              <div className="flex items-center gap-2">
                <div className="w-[33px] h-[33px] rounded-lg border  ">
                  <button className="p-2">
                    <FiMinus />
                  </button>
                </div>
                <div className="w-38px] h-[32px] rounded-lg border ">
                  <span className="p-4">1</span>
                </div>
                <div className="w-[34px] h-[34px] rounded-lg border ">
                  <button className="p-2">
                    <GoPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-medium">Tạm tính</span>
              <div className="flex font-semibold text-2xl">
                224.100
                <sub className="">đ</sub>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button name="Mua ngay" fw />
              <Button
                style={`w-full px-4 py-2 rounded-md border  border-blue-500 text-blue-500 bg-white`}
                name="Thêm vào giỏ"
              />
              <Button
                name="Mua trước trả sau"
                style={`w-full px-4 py-2 rounded-md border  border-blue-500 text-blue-500 bg-white`}
              />
            </div>
          </div>
          <div className="w-[360px] h-[120px]">
            <img
              className="rounded-xl"
              src="https://salt.tikicdn.com/ts/tka/1f/10/e6/5f2bc6b51044a22e322810a07cdf7b28.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="m-4 flex ">
        <div className="bg-white w-full p-4 rounded-xl flex flex-col gap-4 ">
          <h3 className="font-medium">Sản phẩm bạn đã xem</h3>
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
  );
};

export default ProductCard;
