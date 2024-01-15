import React, { useState } from "react";
import { CustomSlide, SliderCate, TopSeller } from "../../organisms";
import icons from "../../../utils/icons";
import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import { prodcutDetailTabs } from "../../../utils/constant";
import path from "../../../utils/path";
const { IoChevronBackOutline, IoIosArrowForward, CiStar } = icons;
const DetailProduct = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="flex w-main">
      <div className="flex-2 flex rounded-md bg-opacity-90 bg-white m-4 ">
        <SliderCate />
      </div>
      <div className="flex-8 flex ml-0 m-4">
        <div className=" w-full flex flex-col gap-2 ">
          <div className="bg-white p-4 flex flex-col gap-8 ">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-normal">Đồ Chơi - Mẹ & Bé</h3>
              <CustomSlide />
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-4 w-full">
                {prodcutDetailTabs.map((el) => (
                  <Link key={el.id} to={el.path}>
                    <div className="flex gap-4 w-full ">
                      <span
                        onClick={() => setActiveTab(el.id)}
                        className={
                          activeTab === +el.id ? `${el.style}` : `${el.hover}`
                        }
                      >
                        {el.value}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                <span>1/50</span>
                <div className="flex gap-1">
                  <span className="w-[36px] pt-2 h-[36px]">
                    <IoChevronBackOutline color="gray" size={22} />
                  </span>
                  <span className="w-[36px] pt-2 h-[36px]">
                    <IoIosArrowForward color="gray" size={22} />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-[56px] py-2 border-t-[1px]">
              <div className="w-[50px] h-[32px] rounded-3xl border border-gray-300 bg-gray-200 flex items-center justify-center ">
                <img
                  className="w-[24px] h-[12px] "
                  src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          {activeTab === 1 ? (
            <div className="flex flex-col gap-8 rounded-xl">
              <div className="flex gap-2">
                <Link to={`/${path.PRODUCT_INFO}`}>
                  <div className="w-[200px] border rounded-lg h-[388px] bg-gray-100 cursor-pointer">
                    <img
                      className="rounded-t-lg w-full h-[200px]"
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
                    <div className="px-2 flex flex-col w-full h-[124px]">
                      <div className="w-full h-[72px]">
                        <p className="text-xs font-normal w-full h-fit text-gray-800 overflow-hidden break-words whitespace-break-spaces ">
                          Ba lô nam thời trang cao cấp phong cách mới 15,6
                          dsdasda acasdsdadsadasddadasdas
                        </p>
                        <div className="flex w-full h-[15px] ">
                          <span className="">
                            <CiStar color="yellow" size={12} />
                          </span>
                          <span className="ml-[4px] pl-[5px] before:absolute before:top-[50%] before:left-0 before:w-[0.5px] before:h-[12px] before:translate-y-[-50%] before:bg-gray-400 relative text-[10px] font-normal text-gray-400">
                            Đã bán 55
                          </span>
                        </div>
                      </div>
                      <div className="flex text-base  h-[24px]">
                        <div className="font-medium ">441.000</div>
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
          ) : (
            <div className="bg-white p-4 flex flex-col gap-8 rounded-xl">
              <Outlet />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
